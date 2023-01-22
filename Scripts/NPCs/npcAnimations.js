// const xPositionOutput = document.querySelector(".x");
// const yPositionOutput = document.querySelector(".y");

function npcAnnaMovement() {
  const randomNumber = [20000, 30000, 40000, 9000, 7000, 70000, 10000, 13000, 14000, 17000, 18000, 10000];
  const randomEatTime = [20000, 30000, 40000, 7000, 70000, 10000, 13000];
  let xPosition = 0;
  let yPosition = 0;

  function mainAnimation() {

    let moveDown  = setInterval(() => { 
      yPosition += 3;
      npc1.movement.y += 3;
      npc1.isMoving = true;
      npc1.frames.frameY = 0;
      npc1.scale = 0.8
    }, 20);
  
    let moveRight  = setInterval(() => { 
        if (yPosition >= 70) {
        clearInterval(moveDown)
        xPosition += 3;
        npc1.movement.x += 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 2;
      }
    }, 20);
  
    let moveDown2 = setInterval(() => { 
      if (xPosition >= 630) {
        clearInterval(moveRight)
        yPosition += 3;
        npc1.movement.y += 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 0;
      }
    }, 20);
  
    let moveRight2 = setInterval(() => { 
      if (yPosition >= 1080) {
        clearInterval(moveDown2)
        xPosition += 3;
        npc1.movement.x += 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 2;
      }
    }, 20);
  
    let moveUP = setInterval(() => { 
      if (xPosition >= 1140) {
        clearInterval(moveRight2)
        yPosition -= 3;
        npc1.movement.y -= 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 3;
      }
    }, 20);
  
    let moveRight3 = setInterval(() => { 
      if (xPosition >= 1140 && yPosition <= 800) {
        clearInterval(moveUP)
        xPosition += 3;
        npc1.movement.x += 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 2;
      }
    }, 20);
  
    let moveUp2 = setInterval(() => { 
      if (xPosition >= 1270) {
        clearInterval(moveRight3)
        yPosition -= 3;
        npc1.movement.y -= 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 3;
        if (yPosition <= 800) {
          clearInterval(moveUp2)
          npc1.isMoving = false;
          npc1.frames.frameX = 2;
          let randomTime = randomEatTime[Math.floor(Math.random() * randomEatTime.length)];
          setTimeout(() => {
            reverseAnimation();
          }, randomTime);
        }
      }
    }, 20);
  }



  function reverseAnimation() {
    let moveDown = setInterval(() => { 
        yPosition += 3;
        npc1.movement.y += 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 0;
    }, 20);

    let moveLeft = setInterval(() => { 
      if (yPosition >= 810) {
        clearInterval(moveDown)
        xPosition -= 3;
        npc1.movement.x -= 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 1;
      }
    }, 20);

    let moveDown2 = setInterval(() => { 
      if (xPosition <= 1180) {
        clearInterval(moveLeft)
        yPosition += 3;
        npc1.movement.y += 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 0;
      }
    }, 20);

    let moveLeft2 = setInterval(() => { 
      if (yPosition >= 1100) {
        clearInterval(moveDown2)
        xPosition -= 3;
        npc1.movement.x -= 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 1;
      }
    }, 20);

    let moveUp = setInterval(() => { 
      if (xPosition <= 700) {
        clearInterval(moveLeft2)
        yPosition -= 3;
        npc1.movement.y -= 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 3;
      }
    }, 20);

    let moveLeft3 = setInterval(() => { 
      if (yPosition <= 100) {
        clearInterval(moveUp)
        xPosition -= 3;
        npc1.movement.x -= 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 1;
      }
    }, 20); 

    let moveUp2 = setInterval(() => { 
      if (xPosition <= 0) {
        clearInterval(moveLeft3)
        yPosition -= 3;
        npc1.movement.y -= 3;
        npc1.isMoving = true;
        npc1.frames.frameY = 3;
        if (yPosition <= -7) {
          clearInterval(moveUp2)
          npc1.isMoving = false;
          npc1.scale = 0;
          let randomTime = randomNumber[Math.floor(Math.random() * randomNumber.length)];
          setTimeout(() => {
            mainAnimation()
          }, randomTime);
        }
      }
    }, 20);

  }
  mainAnimation()
}
npcAnnaMovement()


function npcMaryMovement() {
  let animationSpeed = 10;
  const randomNumber = [20000, 30000, 40000, 9000, 7000, 70000, 10000, 13000, 14000, 17000, 18000, 10000];
  const waitInFarmTime = [20000, 30000, 40000, 9000, 7000, 70000, 10000, 13000, 14000, 17000, 18000, 10000];
  const waitInMarketTime = [20000, 30000, 40000, 9000, 7000, 70000, 10000, 13000, 14000, 17000, 18000, 10000];
  
  let xPosition = 0;
  let yPosition = 0;

  setInterval(() => {
    // xPositionOutput.innerHTML = "X: " + xPosition;
    // yPositionOutput.innerHTML = "Y: " + yPosition;
  }, animationSpeed);

  function mainAnimation() {
    let moveLeft = setInterval(() => {
      npc2.frames.frameY = 1;
      npc2.position.x -= 3;
      xPosition -= 3;
      npc2.isMoving = true;
      npc2.scale = 1.5;
      // npc2.position.x += 2
    }, animationSpeed);

    let moveUp = setInterval(() => {
      if (xPosition <= -1500) {
        clearInterval(moveLeft)
        npc2.frames.frameY = 3;
        npc2.position.y -= 3;
        yPosition -= 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveLeft2 = setInterval(() => {
      if (yPosition <= -200) {
        clearInterval(moveUp)
        npc2.frames.frameY = 1;
        npc2.position.x -= 3;
        xPosition -= 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveUp2 = setInterval(() => {
      if (xPosition <= -1600) {
        clearInterval(moveLeft2)
        npc2.frames.frameY = 3;
        npc2.position.y -= 3;
        yPosition -= 3;
        npc2.isMoving = true;
        if (yPosition <= -230) { // If the npc gets to the farm it should stop moving;
          clearInterval(moveUp2)
          npc2.isMoving = false;
          npc2.scale = 0;
          let waitInFarmRandowTime = waitInFarmTime[Math.floor(Math.random() * waitInFarmTime.length)];
          setTimeout(() => {
            goToTheMarket();
          }, waitInFarmRandowTime);
        }
      }
    }, animationSpeed);
  }

  function goToTheMarket() {
    let moveDown = setInterval(() => {
        npc2.frames.frameY = 0;
        npc2.position.y += 3;
        yPosition += 3;
        npc2.isMoving = true;
        npc2.scale = 1.5;
    }, animationSpeed);

    let moveLeft = setInterval(() => {   
      if (yPosition >= -180) {
        clearInterval(moveDown)
        npc2.frames.frameY = 2;
        npc2.position.x += 3;
        xPosition += 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveDown2 = setInterval(() => {   
      if (xPosition >= -1500) {
        clearInterval(moveLeft)
        npc2.frames.frameY = 0;
        npc2.position.y += 3;
        yPosition += 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveLeft2 = setInterval(() => {   
      if (yPosition >= 30) {
        clearInterval(moveDown2)
        npc2.frames.frameY = 2;
        npc2.position.x += 3;
        xPosition += 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveUp = setInterval(() => {   
      if (xPosition >= -590) {
        clearInterval(moveLeft2)
        npc2.frames.frameY = 3;
        npc2.position.y -= 3;
        yPosition -= 3;
        npc2.isMoving = true;
        
      }
    }, animationSpeed);

    let moveRight3 = setInterval(() => {   
      if (yPosition <= -710) {
        clearInterval(moveUp)
        npc2.frames.frameY = 1;
        npc2.position.x -= 3;
        xPosition -= 3;
        npc2.isMoving = true;
        
      }
    }, animationSpeed);

    let moveUp2 = setInterval(() => {   
      if (xPosition <= -1100 && yPosition <= -710) {
        clearInterval(moveRight3)
        npc2.frames.frameY = 3;
        npc2.position.y -= 3;
        yPosition -= 3;
        npc2.isMoving = true;
        
      }
    }, animationSpeed);

    let moveLeft3 = setInterval(() => {   
      if (yPosition <= -1100) {
        clearInterval(moveUp2)
        npc2.frames.frameY = 2;
        npc2.position.x += 3;
        xPosition += 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveUp3 = setInterval(() => {   
      if (xPosition >= -970 && yPosition <= -1100) {
        clearInterval(moveLeft3)
        npc2.frames.frameY = 3;
        npc2.position.y -= 3;
        yPosition -= 3;
        npc2.isMoving = true;
        if (yPosition <= -1170) {
          clearInterval(moveUp3)
          npc2.isMoving = false;
          let waitInMarketRandowTime = waitInMarketTime[Math.floor(Math.random() * waitInMarketTime.length)];
          setTimeout(() => {
            reverseAnimation()
          }, waitInMarketRandowTime);
        }
      }
    }, animationSpeed);
  }//

  function reverseAnimation() {
    let moveDown = setInterval(() => {   
      // if (xPosition >= -1500) {
        npc2.frames.frameY = 0;
        npc2.position.y += 3;
        yPosition += 3;
        npc2.isMoving = true;
      //}
    }, animationSpeed);

    let moveLeft = setInterval(() => {   
      if (yPosition >= -1000) {
        clearInterval(moveDown)
        npc2.frames.frameY = 1;
        npc2.position.x -= 3;
        xPosition -= 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveDown2 = setInterval(() => {   
      if (xPosition <= -1130) {
        clearInterval(moveLeft)
        npc2.frames.frameY = 0;
        npc2.position.y += 3;
        yPosition += 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveRight = setInterval(() => {   
      if (yPosition >= -710) {
        clearInterval(moveDown2)
        npc2.frames.frameY = 2;
        npc2.position.x += 3;
        xPosition += 3;
        npc2.isMoving = true;
        
      }
    }, animationSpeed);

    let moveDown3 = setInterval(() => {   
      if (xPosition >= -600) {
        clearInterval(moveRight)
        npc2.frames.frameY = 0;
        npc2.position.y += 3;
        yPosition += 3;
        npc2.isMoving = true;
      }
    }, animationSpeed);

    let moveRight2 = setInterval(() => {   
      if (yPosition >= 0) {
        clearInterval(moveDown3)
        npc2.frames.frameY = 2;
        npc2.position.x += 3;
        xPosition += 3;
        npc2.isMoving = true;     
      }
    }, animationSpeed);

    let moveUp = setInterval(() => {   
      if (xPosition >= -20) {
        clearInterval(moveRight2)
        npc2.frames.frameY = 3;
        npc2.position.y -= 3;
        xPosition -= 3;
        npc2.isMoving = true;
        if (yPosition >= 0) {
          clearInterval(moveUp)
          npc2.scale = 0;
          let waitAtHomeRandowTime = randomNumber[Math.floor(Math.random() * randomNumber.length)];
          setTimeout(() => {
            mainAnimation();
          }, waitAtHomeRandowTime);
        }
        
      }
    }, animationSpeed);
  }


  mainAnimation()
}
npcMaryMovement();

// let waitInFarmRandowTime = waitInFarmTime[Math.floor(Math.random() * waitInFarmTime.length)];
//           setTimeout(() => { // Wat for some time before she gets out
//             npc2.frames.frameY = 0;
//             npc2.position.y += 3;
//             yPosition += 3;
//             npc2.isMoving = true;
//           }, 2000);