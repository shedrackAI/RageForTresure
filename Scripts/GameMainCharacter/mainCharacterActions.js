const mainCharacterGruntingSounds = [
    "../../GameAssets/Audios/MainCharacter_Grunting/grunting_2_alex.wav",
    "../../GameAssets/Audios/MainCharacter_Grunting/grunting_4_alex.wav",
    "../../GameAssets/Audios/MainCharacter_Grunting/grunting_6_alex.wav",
    "../../GameAssets/Audios/MainCharacter_Grunting/grunting_7_alex.wav",
]

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'a':
           console.log("kdjdj")
           break;
        case 'w':

        case 'd':

        case 's':
    
    }
})

// a

// function checkIfCharacterIsNotMoving() {
//     const randomGruntingSound = mainCharacterGruntingSounds[Math.floor(Math.random() * mainCharacterGruntingSounds.length)];
//     const mainCharacterGruntingAudio = new Audio(randomGruntingSound);
//     let  c = setTimeout(() => {
//         if (mainCharacter.isMoving === true) {
//             clearTimeout(c)
//          }
//         mainCharacterGruntingAudio.play()
//     }, 4000);
// }