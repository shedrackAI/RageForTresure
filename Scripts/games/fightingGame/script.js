const backgroundImg = './fightingGameImages/background.png'
const shopImg = './fightingGameImages/shop.png'

//Enemy Sprite
const kenjiIdle = './fightingGameImages/kenji/Idle.png';
const kenjiRun = './fightingGameImages/kenji/Run.png'
const kenjiJump = './fightingGameImages/kenji/Jump.png'
const kenjiFall = './fightingGameImages/kenji/Fall.png'
const kenjiAttack1 = './fightingGameImages/kenji/Attack1.png'
const kenjiTakeHit = './fightingGameImages/kenji/Take hit.png'
const kenjiDeath = './fightingGameImages/kenji/Death.png'

//Hero Sprite
const samuraiMackIdle = './fightingGameImages/samuraiMack/Idle.png';
const samuraiMackRun = './fightingGameImages/samuraiMack/Run.png'
const samuraiMackJump = './fightingGameImages/samuraiMack/Jump.png'
const samuraiMackFall = './fightingGameImages/samuraiMack/Fall.png'
const samuraiMackAttack1 = './fightingGameImages/samuraiMack/Attack1.png'
const samuraiMackTakeHit = './fightingGameImages/samuraiMack/Take Hit - white silhouette.png'
const samuraiMackDeath = './fightingGameImages/samuraiMack/Death.png'

const canvas2 = document.querySelector('#fightingGame');
const fightingGameCtx = canvas2.getContext('2d');

const canvasWidth = 1024;
const canvasHeight = 576;

canvas2.width = canvasWidth;
canvas2.height = canvasHeight;

const gravity = 0.7;

const background = new Sprite2({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: backgroundImg,
})

const shop = new Sprite2({
    position: {
        x: 600,
        y: 128,
    },
    imageSrc: shopImg,
    scale: 2.75,
    framesMax: 6,
})


const player2 = new Fifgter({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
    //    offset: {
    //        x: 0,
    //        y: 0
    //    },
    imageSrc: samuraiMackIdle,
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y: 157
    },
    sprites: {
        idle: {
            imageSrc: samuraiMackIdle,
            framesMax: 8
        },
        run: {
            imageSrc: samuraiMackRun,
            framesMax: 8
        },
        jump: {
            imageSrc: samuraiMackJump,
            framesMax: 2
        },
        fall: {
            imageSrc: samuraiMackFall,
            framesMax: 2
        },
        attack1: {
            imageSrc: samuraiMackAttack1,
            framesMax: 6
        },
        takeHit: {
            imageSrc: samuraiMackTakeHit,
            framesMax: 4
        },
        death: {
            imageSrc: samuraiMackDeath,
            framesMax: 6
        }
    },

    attackBox: {
        offset: {
            x: 80,
            y: 40
        },
        width: 170,
        height: 50
    }
})

const enemy = new Fifgter({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 10
    },
    color: 'blue',
    offset: {
        x: 50,
        y: 0
    },
    imageSrc: kenjiIdle,
    framesMax: 4,
    scale: 2.5,
    offset: {
        x: 215,
        y: 167
    },
    sprites: {
        idle: {
            imageSrc: kenjiIdle,
            framesMax: 4
        },
        run: {
            imageSrc: kenjiRun,
            framesMax: 8
        },
        jump: {
            imageSrc: kenjiJump,
            framesMax: 2
        },
        fall: {
            imageSrc: kenjiFall,
            framesMax: 2
        },
        attack1: {
            imageSrc: kenjiAttack1,
            framesMax: 4
        },
        takeHit: {
            imageSrc: kenjiTakeHit,
            framesMax: 3
        },
        death: {
            imageSrc: kenjiDeath,
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: -175,
            y: 50
        },
        width: 175,
        height: 50
    }
    //imageSrc: backgroundImg,
})

const gameKeys = {
    keyA: {
        pressed: false,
    },
    keyD: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
    ArrowRight: {
        pressed: false,
    }
}

decreaseTimer();

function fightingGameAnimate() {
    fightingGameCtx.fillStyle = "white"
    fightingGameCtx.imageSmoothingEnabled = false
    fightingGameCtx.fillRect(0, 0, canvasWidth, canvasHeight)
    background.update();
    shop.update();
    console.log("hello")
    // fightingGameCtx.fillStyle = "rgba(255, 255, 255, 0.15)"
    // fightingGameCtx.fillRect(0, 0, canvasWidth, canvasHeight)

    player2.update();
    enemy.update();

    player2.velocity.x = 0;
    enemy.velocity.x = 0;



    //Player2 Movement

    if (gameKeys.keyD.pressed && player2.lastKey === "KeyD") {
        player2.velocity.x = 5
        player2.switchSprite('run')
    } else if (gameKeys.keyA.pressed && player2.lastKey === "KeyA") {
        player2.velocity.x = -5
        player2.switchSprite('run')
    } else {
        player2.switchSprite('idle')
    }

    if (player2.velocity.y < 0) {
        player2.switchSprite('jump')
    } else if (player2.velocity.y > 0) {
        player2.switchSprite('fall')
    }

    //Enemy Movement
    if (gameKeys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
        enemy.velocity.x = 5
        enemy.switchSprite('run')
    } else if (gameKeys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
        enemy.velocity.x = -5
        enemy.switchSprite('run')
    } else {
        enemy.switchSprite('idle')
    }

    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
    } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall')
    }

    //Detect for Collison
    if (collisonDetector({
        rectangle1: player2,
        rectangle2: enemy,
    }) && player2.isAttacking && player2.currentFrame === 4) {
        enemy.takeHit()
        player2.isAttacking = false
        document.querySelector('#enemyHealth').style.width = enemy.health + '%';
    }

    if (player2.isAttacking && player2.currentFrame === 4) {
        player2.isAttacking = false
    }

    if (collisonDetector({
        rectangle1: enemy,
        rectangle2: player2,
    }) && enemy.isAttacking && enemy.currentFrame === 2) {
        player2.takeHit()
        document.querySelector('#player2Health').style.width = player2.health + '%';
        enemy.isAttacking = false
    }

    if (enemy.isAttacking && enemy.currentFrame === 2) {
        enemy.isAttacking = false
    }

    //End the game base on health
    if (enemy.health <= 0 || player2.health <= 0) {
        detamineWinner({ player2, enemy, timerId })
    }
}

window.addEventListener('keydown', (event) => {
    if (!player2.dead) {
        switch (event.code) {
            case "KeyA":
                gameKeys.keyA.pressed = true
                player2.lastKey = "KeyA"
                break;

            case "KeyW":
                player2.velocity.y = -20
                break;

            case "KeyD":
                gameKeys.keyD.pressed = true
                player2.lastKey = "KeyD"
                break;
            case "Space":
                player2.attack();
                break;

        }
    }

    //Enemy Movement controls
    if (!enemy.dead) {
        switch (event.code) {
            case "ArrowRight":
                gameKeys.ArrowRight.pressed = true
                enemy.lastKey = "ArrowRight"
                break;

            case "ArrowLeft":
                gameKeys.ArrowLeft.pressed = true
                enemy.lastKey = "ArrowLeft"
                break;

            case "ArrowUp":
                enemy.velocity.y = -20
                break;

            case "ArrowDown":
                //enemy.isAttacking = true;
                enemy.attack();
                break;
        }
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.code) {
        case "KeyA":
            gameKeys.keyA.pressed = false
            break;

        case "KeyD":
            gameKeys.keyD.pressed = false
            break;

        //Enemy Movement controls
        case "ArrowRight":
            gameKeys.ArrowRight.pressed = false
            lastKey = "ArrowRight"
            break;

        case "ArrowLeft":
            gameKeys.ArrowLeft.pressed = false
            lastKey = "ArrowLeft"
            break;
    }
})