const a = document.querySelector(".a");
const w = document.querySelector(".w");
const s = document.querySelector(".s");
const d = document.querySelector(".d");

const wKeyUp = "../GameAssets/Keyboard-keys/UpKey/w.png";
const aKeyUp = "../GameAssets/Keyboard-keys/UpKey/a.png";
const sKeyUp = "../GameAssets/Keyboard-keys/UpKey/s.png";
const dKeyUp = "../GameAssets/Keyboard-keys/UpKey/d.png";

const wKeyDown = "../GameAssets/Keyboard-keys/downKey/w.png";
const aKeyDown = "../GameAssets/Keyboard-keys/downKey/a.png";
const sKeyDown = "../GameAssets/Keyboard-keys/downKey/s.png";
const dKeyDown = "../GameAssets/Keyboard-keys/downKey/d.png";

document.addEventListener('keydown', (e) => {
   switch (e.key) {
      case 'a':
         a.src = aKeyDown;
         break;

      case 'w':
         w.src = wKeyDown;
         break;

      case 'd':
         d.src = dKeyDown;
         break;

      case 's':
         s.src = sKeyDown;
         break;
   }
   console.log(e.key)
})

document.addEventListener('keyup', (e) => {
   switch (e.key) {
      case 'a':
         a.src = aKeyUp;
         break;

      case 'w':
         w.src = wKeyUp;
         break;

      case 'd':
         d.src = dKeyUp;
         break;

      case 's':
         s.src = sKeyUp;
         break;
   }
})