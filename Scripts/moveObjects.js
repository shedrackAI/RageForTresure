function moveObject() {
    const movables = [
        ...boundaries, 
        forGrounds,
        map, 
        ...playerHouse,
        houseDoorOpen
    ]

    // change collisionBlock to mainCharacterCollisionBlock

    let moving = true

    if (keys.a.pressed && lastKey === 'a') {
        // mainCharacter.isMoving = true;
        boundaries.forEach(boundary => {
            if (rectangularCollision({
                rect1: mainCharacterCollisionBlock,
                rect2: {...boundary, position: {
                   x: boundary.position.x + 3,
                   y: boundary.position.y
                }}
            })) {
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
                rect2: {...boundary, position: {
                   x: boundary.position.x,
                   y: boundary.position.y + 3
                }}
            })) {
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
                rect2: {...boundary, position: {
                   x: boundary.position.x - 3,
                   y: boundary.position.y
                }}
            })) {
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
                rect2: {...boundary, position: {
                   x: boundary.position.x,
                   y: boundary.position.y - 3
                }}
            })) {
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
