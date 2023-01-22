document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'a':
            keys.a.pressed = true;
            mainCharacter.isMoving = true;
            mainCharacterIsMoving = true;
            lastKey = 'a';
            break;

        case 'w':
            mainCharacter.isMoving = true;
            mainCharacterIsMoving = true;
            keys.w.pressed = true;
            lastKey = 'w';
            break;

        case 'd':
            mainCharacter.isMoving = true;
            mainCharacterIsMoving = true;
            keys.d.pressed = true;
            lastKey = 'd';
            break;

        case 's':
            mainCharacter.isMoving = true;
            mainCharacterIsMoving = true;
            keys.s.pressed = true;
            lastKey = 's';
            break;
        case 'Enter':
            keys.Enter.pressed = true;
            break;
    }
    console.log(e.key)
})

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'a':
            mainCharacter.isMoving = false;
            mainCharacterIsMoving = false;
            keys.a.pressed = false;
            break;

        case 'w':
            mainCharacter.isMoving = false;
            mainCharacterIsMoving = false;
            keys.w.pressed = false;
            break;

        case 'd':
            mainCharacter.isMoving = false;
            mainCharacterIsMoving = false;
            keys.d.pressed = false;
            break;

        case 's':
            mainCharacter.isMoving = false;
            mainCharacterIsMoving = false;
            keys.s.pressed = false;
            break;
        case 'Enter':
            keys.Enter.pressed = false;
            break;
    }
})