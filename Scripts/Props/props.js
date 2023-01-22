function createProps() {
    slimes.forEach(slime => {
        slime.update()
        slime.isMoving = true
        moveObjectWithNoCollisionWithMap({objectToMove: slime})   
    })
}