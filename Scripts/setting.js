// const settingBtn = document.querySelector(".setting_btn");
// const settingContainer = document.querySelector(".setting_container");

const playMapAudioBtn = document.querySelector(".audio_btn");

// settingBtn.addEventListener("click", () => {
//    settingContainer.classList.toggle("height")
//    settingBtn.classList.toggle("roll_btn");
//    // changeCharacterSpeed()
// });


// // (() => {
// //    let characterSpeedRange = document.querySelector(".char_speed").value / 5;
// //    characterSpeed = characterSpeedRange;
// //    console.log(characterSpeed)
// // })()

// let characterSpeedRange = document.querySelector(".char_speed").value / 5;
// // setInterval(() => {
// //    characterSpeed = characterSpeedRange;
// //    mainCharacter.frames.animationFrame = characterSpeedRange
// // }, 10);
// // let characterSpeed;

let gameSong = new Audio("./GameAssets/Audios/map2.mp3");

playMapAudioBtn.addEventListener("click", () => {
   if (gameSong.paused) { //Check if the user paused the song
      gameSong.play()
   } else (
      gameSong.pause()
   )

 setInterval(() => { //Check if the song has ended, then replay it
    if (gameSong.ended) {
      gameSong.play()
   }
}, 10);
});
