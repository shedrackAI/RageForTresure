function rectangularCollision({ rect1, rect2 }) {
    return (rect1.position.x + rect1.width >= rect2.position.x && rect1.position.x <= rect2.position.x + rect2.width && rect1.position.y + rect1.height >= rect2.position.y && rect1.position.y <= rect2.position.y + rect2.height)
}

function updateClasses() {
    map.update();
    houseDoorOpen.draw()
    mainCharacterShadow.update({ follow: mainCharacter });
    createNpc();
    createProps()
    drawAnimals();
    createMainCharacters()
    player.update({ follow: mainCharacter });
    forGrounds.update();
    mainCharacterCollisionBlock.update({ follow: mainCharacter });

}

//Function that creates new Image Object when it's called
function createSprite(imageSrc) {
    const image = new Image();
    image.src = imageSrc
    return image
}

function moveObjectWithMap({ objectToMove, objectToMoveCollision }) {
    let moving = true

    if (keys.a.pressed && lastKey === 'a') {
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {
                    ...boundary, position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                    }
                }
            })) {
                moving = false;
            }
        })
        if (moving) {
            //movables.forEach(move => {
            objectToMove.position.x += 3
            objectToMoveCollision.position.x += 3
            //})
        }
    } else if (keys.w.pressed && lastKey === 'w') {
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }
                }
            })) {
                moving = false;
            }
        })
        if (moving) {
            objectToMove.position.y += 3
            objectToMoveCollision.position.y += 3
        }
    } else if (keys.d.pressed && lastKey === 'd') {
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {
                    ...boundary, position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y
                    }
                }
            })) {
                moving = false;
            }
        })
        if (moving) {
            objectToMove.position.x -= 3
            objectToMoveCollision.position.x -= 3
        }
    } else if (keys.s.pressed && lastKey === 's') {
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }
                }
            })) {
                moving = false;
            }
        })
        if (moving) {
            objectToMove.position.y -= 3
            objectToMoveCollision.position.y -= 3
        }
    }

}

function moveObjectWithNoCollisionWithMap({ objectToMove }) {
    let moving = true

    if (keys.a.pressed && lastKey === 'a') {
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {
                    ...boundary, position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                    }
                }
            })) {
                moving = false;
            }
        })
        if (moving) {
            //movables.forEach(move => {
            objectToMove.position.x += 3
            //})
        }
    } else if (keys.w.pressed && lastKey === 'w') {
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y + 3
                    }
                }
            })) {
                moving = false;
            }
        })
        if (moving) {
            objectToMove.position.y += 3
        }
    } else if (keys.d.pressed && lastKey === 'd') {
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {
                    ...boundary, position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y
                    }
                }
            })) {
                moving = false;
            }
        })
        if (moving) {
            objectToMove.position.x -= 3
        }
    } else if (keys.s.pressed && lastKey === 's') {
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {
                    ...boundary, position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                    }
                }
            })) {
                moving = false;
            }
        })
        if (moving) {
            objectToMove.position.y -= 3
        }
    }

}

let down = 0;

let left = 0;

function moveDownAnimator({
    waitTime,
    object,
    y,
    totalDistance,
    objectCollision,
    frameY,
}) {
    setTimeout(() => {
        let down = 0;
        
        let interval = setInterval(() => {
            down += y
            object.movement.y += y;
            objectCollision.movement.y += y;
            object.frames.frameY = frameY;
            object.isMoving = true;
        }, 20);

        let second = setInterval(() => {
            if (down >= totalDistance) {
                clearInterval(interval)
                clearInterval(second)
                object.isMoving = false;
                console.log("ended")
            }
        }, 10);
    }, waitTime);
}

function moveUpAnimator({
    waitTime,
    object,
    y,
    totalDistance,
    objectCollision,
    frameY,
}) {
    setTimeout(() => {
        let up = 0;
        
        let interval = setInterval(() => {
            up += y
            object.movement.y += y;
            objectCollision.movement.y += y;
            object.frames.frameY = frameY;
            object.isMoving = true;
        }, 20);

        let second = setInterval(() => {
            if (up <= totalDistance) {
                clearInterval(interval)
                clearInterval(second)
                object.isMoving = false;
                console.log("ended")
            }
        }, 10);
    }, waitTime);
}

function moveRightAnimator({
    waitTime,
    object,
    x,
    totalDistance,
    objectCollision,
    frameY,
}) {
    setTimeout(() => {
        let right = 0;
        
        let interval = setInterval(() => {
            right += x
            object.movement.x += x;
            objectCollision.movement.x += x;
            object.frames.frameY = frameY;
            object.isMoving = true;
        }, 20);

        let second = setInterval(() => {
            if (right >= totalDistance) {
                clearInterval(interval)
                clearInterval(second)
                object.isMoving = false;
                console.log("ended")
            }
        }, 10);
    }, waitTime);
}

function moveLeftAnimator({
    waitTime,
    object,
    x,
    totalDistance,
    objectCollision,
    frameY,
}) {
    setTimeout(() => {
        let left = 0;
        
        let interval = setInterval(() => {
            left += x
            object.movement.x += x;
            objectCollision.movement.x += x;
            object.frames.frameY = frameY;
            object.isMoving = true;
        }, 20);

        let second = setInterval(() => {
            if (left <= totalDistance) {
                clearInterval(interval)
                clearInterval(second)
                object.isMoving = false;
                console.log("ended")
            }
        }, 10);
    }, waitTime);
}

function loopAnimation({
    waitTime,
    object,
    y,
    x,
    randomTimeSet,
}) {
    setTimeout(() => {
        let interval = setInterval(() => {
            object.movement.y += y;
            object.movement.y += x;
            object.isMoving = true;
        }, 20);

        setInterval(() => {
            let animationFrame = [12, 11, 14, 15, 16, 17, 18, 19, 20, 21,];
            let randomAnimationFrame = animationFrame[Math.floor(Math.random() * animationFrame.length)];
            let randomFrame = Math.floor(Math.random() * 4);
            object.frames.frameY = randomFrame;
            object.shadowFrames.frameY = randomFrame;
            object.frames.animationFrame = randomAnimationFrame;
        }, randomTimeSet);

        setTimeout(() => {
            let animationFrame = [12, 11, 14, 15, 16, 17, 18, 19, 20, 21,];
            let randomAnimationFrame = animationFrame[Math.floor(Math.random() * animationFrame.length)];
            let randomFrame = Math.floor(Math.random() * 4);
            object.frames.frameY = randomFrame;
            object.shadowFrames.frameY = randomFrame;
            object.frames.animationFrame = randomAnimationFrame;
        }, 10);
    }, waitTime);
}