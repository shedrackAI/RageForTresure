const chickenPositionMap = []
for (let i = 0; i < eatingChickenMapingPosition.length; i += 115) {
   chickenPositionMap.push(eatingChickenMapingPosition.slice(i, 115 + i))
}

chickenPositionMap.forEach((row, i) => {
   row.forEach((symbol, j) => {
      if (symbol === 3430)

         chickenEating.push(new AnimalWithShadow({
            image: createSprite(gameImages.animals.chicken.chickenEatImage),
            position: {
               x: j * 32,
               y: i * 32
            },
            scale: 1,
            frames: {
               fpsY: 4,
               fpsX: 4,
               frameX: 0,
               frameY: 1,
               animationFrame: 17
            },
            movement: {
               x: 0,
               y: 0
            },
            shadowImage: createSprite(gameImages.animals.chicken.chickenShadow),
            shadowOffset: {
               x: -5,
               y: 0,
            },
            shadowScale: 1.3,
            shadowFrames: {
               fpsX: 1,
               fpsY: 4,
               frameX: 0,
               frameY: 0,
            }

         }))
   })
})


const pigsPositionMap = []
for (let i = 0; i < pigEatingPosition.length; i += 115) {
   pigsPositionMap.push(pigEatingPosition.slice(i, 115 + i))
}

pigsPositionMap.forEach((row, i) => {
   row.forEach((symbol, j) => {
      if (symbol === 3186)
         pigsEating.push(new AnimalWithShadow({
            image: createSprite(gameImages.animals.pig.pigEatImage),
            position: {
               x: j * 31,
               y: i * 30.5
            },
            scale: 1,
            frames: {
               fpsY: 4,
               fpsX: 4,
               frameX: 0,
               frameY: 1,
               animationFrame: 17
            },
            movement: {
               x: 0,
               y: 0
            },
            shadowImage: createSprite(gameImages.animals.pig.pigShadowImage),
            shadowOffset: {
               x: 0,
               y: -5
            },
            shadowScale: 1,
            shadowFrames: {
               fpsX: 1,
               fpsY: 4,
               frameX: 0,
               frameY: 1,
            }

         }))
   })
})



const sheepsPositionMap = []
for (let i = 0; i < sheepEatingPosition.length; i += 115) {
   sheepsPositionMap.push(sheepEatingPosition.slice(i, 115 + i))
}

sheepsPositionMap.forEach((row, i) => {
   row.forEach((symbol, j) => {
      if (symbol === 3917)
         sheepsEating.push(new AnimalWithShadow({
            image: createSprite(gameImages.animals.sheep.sheepEatImage),
            position: {
               x: j * 31.5,
               y: i * 30.2
            },
            scale: 1,
            frames: {
               fpsY: 4,
               fpsX: 4,
               frameX: 0,
               frameY: 1,
               animationFrame: 17
            },
            movement: {
               x: 0,
               y: 0
            },
            shadowImage: createSprite(gameImages.animals.pig.pigShadowImage),
            shadowOffset: {
               x: 0,
               y: -5
            },
            shadowScale: 1,
            shadowFrames: {
               fpsX: 1,
               fpsY: 4,
               frameX: 0,
               frameY: 1,
            }

         }))
   })
})