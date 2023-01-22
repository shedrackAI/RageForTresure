const b = [
    ...chickenEating,
    ...pigsEating,
    ...sheepsEating
]

const c = [
    ...boundaries,
]

c.forEach(item => {
    item.position.x += -280
    item.position.y += -330
})
b.forEach(item => {
    item.position.x += -600
    item.position.y += -650
})

function moveMapproperties() {
    const movables = [
        ...boundaries,
        forGrounds,
        map,
        ...playerHouse,
        houseDoorOpen,
    ]


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
            }) || rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: npc1CollisionBlock,
            })
            ) {
                console.log('hit')
                moving = false;
            }
        })
        if (moving) {
            // mainCharacter.position.x  -= 3
            movables.forEach(move => {
                move.position.x += 3
            })
        }

        // mainCharacter.position.x  += 3
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
            }) || rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: npc1CollisionBlock,
            })
            ) {
                console.log('hit')
                moving = false;
            }
        })
        if (moving) {
            // mainCharacter.position.y  -= 3
            movables.forEach(move => {
                move.position.y += 3
            })
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
            }) || rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: npc1CollisionBlock,
            })
            ) {
                console.log('hit')
                moving = false;
            }
        })
        if (moving) {
            movables.forEach(move => {
                move.position.x -= 3
            })
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
            }) || rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: npc1CollisionBlock,
            })
            ) {
                console.log('hit')
                moving = false;
            }
        })
        if (moving) {
            movables.forEach(move => {
                move.position.y -= 3
            })
        }
    }
}
