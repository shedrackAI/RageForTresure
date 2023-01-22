function drawAnimals() {
   chickenEating.forEach(item => {
      item.update()
      moveObjectWithNoCollisionWithMap({ objectToMove: item })

   });

   pigsEating.forEach(pigs => {
      pigs.update()
      moveObjectWithNoCollisionWithMap({ objectToMove: pigs })
   })

   sheepsEating.forEach(pigs => {
      pigs.update()
      moveObjectWithNoCollisionWithMap({ objectToMove: pigs })
   })


   // allAnimals.forEach(animals => {
   //    animals.update();
   //    moveObjectWithNoCollisionWithMap({ objectToMove: animals })
   // });
}

// loop Animation for chicken_1 eating
chickenEating.forEach(item => {
   loopAnimation({
      waitTime: 0,
      object: item,
      y: 0,
      x: 0,
      frameY: 3,
      randomTimeSet: 7000
   })
})

pigsEating.forEach(pigs => {
   loopAnimation({
      waitTime: 0,
      object: pigs,
      y: 0,
      x: 0,
      frameY: 3,
      randomTimeSet: 7000
   })
})

sheepsEating.forEach(pigs => {
   loopAnimation({
      waitTime: 0,
      object: pigs,
      y: 0,
      x: 0,
      frameY: 3,
      randomTimeSet: 7000
   })
})