const doorOpen = './GameAssets/door_open.png'
const doorClose = './GameAssets/door_close.png'

const houseDoorOpen = new Sprite({
    position: {
        x: 390,
        y: 208
    },
    image: createSprite(doorOpen),
    scale: 2.3,
    frames: {
        fpsY: 1,
        fpsX: 4,
        frameX: 0,
        frameY: 0,
        animationFrame: 11
    }
});

setInterval(() => {
    playerHouse.forEach(houseBlock => {
        if (rectangularCollision({
            rect1: mainCharacterCollisionBlock,
            rect2: {
                ...houseBlock, position: {
                    x: houseBlock.position.x,
                    y: houseBlock.position.y - 30
                }
            }
        })) {
            houseDoorOpen.frames.frameX = 3
        } else {
            houseDoorOpen.frames.frameX = 0
        }
    })
}, 100);