const canvas = document.querySelector('#main_canvas');
const ctx = canvas.getContext('2d');


// let gameSong = new Audio("./GameAssets/Audios/Conquer The Success Peaks.wav");
// gameSong.autoplay
// gameSong.play()


canvas.width = 800;//800
canvas.height = 600;//600

const playerImageShadow = './GameAssets/shadow.png'
const playerHover = './GameAssets/player.png'
const forGround = './GameAssets/ForGround.png'

const maps = './GameAssets/Maps/Map.png'

function createSprite(imageSrc) {
    const image = new Image();
    image.src = imageSrc
    return image
}

const map = new Map({
    position: {
        x: -600,
        y: -650,
    },
    image: createSprite(maps),
});

const mainCharacterShadow = new SingleImage({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: -6,
        y: -11
    },
    image: createSprite(playerImageShadow),
    scale: 2.7

});

const player = new Hover({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 14,
        y: -7
    },
    image: createSprite(playerHover),
    scale: 1.3,
    frames: {
        fpsY: 1,
        fpsX: 3,
        frameX: 0,
        frameY: 0,
        animationFrame: 10
    }
});

const forGrounds = new Map({
    position: {
        x: -280,
        y: -330,
    },
    image: createSprite(forGround),
});

const keys = { // Object of keyboard keys to move the character
    a: {
        pressed: false,
    },
    w: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    Enter: {
        pressed: false,
    }
}

const mainCharacterCollisionBlock = new CollisionBlock({ // instance of the collision block Class
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 11,
        y: 2
    },
    width: 30,
    height: 37,
})

let lastKey = '';

function animate() {
    requestAnimationFrame(animate);
    // let characterSpeedRange = document.querySelector(".char_speed").value / 5;
    // mainCharacter.frames.animationFrame = characterSpeedRange
    ctx.imageSmoothingEnabled = false
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    updateClasses();

    boundaries.forEach(boundary => { //this function draws the Map collision Block
        boundary.draw();
    });

    player.isMoving = true;

    moveMapproperties();// This function moves any Object that needs to be moved like the MAP
    changeCharacterFrame();// This function will change the character Frame position 
}

animate();