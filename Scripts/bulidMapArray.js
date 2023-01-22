const collisionsMap = []
console.log(collisionsMap)
for (let i = 0; i < collision.length; i += 95) {

    collisionsMap.push(collision.slice(i, 95 + i))
}

const boundaries = []

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 4172)
            boundaries.push(new Boundary({
                position: {
                    x: j * 32,
                    y: i * 32
                }
            }))
    })
})



const playerHouseMap = []
for (let i = 0; i < playerHouseEnter.length; i += 73) {

    playerHouseMap.push(playerHouseEnter.slice(i, 73 + i))
}

const playerHouse = []

playerHouseMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 2274)
            playerHouse.push(new EnterBuliding({
                position: {
                    x: j * 38.4,
                    y: i * 38.4
                }
            }))
    })
})
