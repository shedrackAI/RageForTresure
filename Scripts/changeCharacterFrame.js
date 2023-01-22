
function changeCharacterFrame() {
   if (mainCharacter.isMoving && lastKey === 'a') {
      mainCharacter.frames.frameY = 3
   } else if (mainCharacter.isMoving && lastKey === 'w') {
      mainCharacter.frames.frameY = 2
   } else if (mainCharacter.isMoving && lastKey === 'd') {
      mainCharacter.frames.frameY = 1
   } else if (mainCharacter.isMoving && lastKey === 's') {
      mainCharacter.frames.frameY = 0
   }
}