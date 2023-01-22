const mainCharacter = new Sprite({
    position: {
        x: 800 / 2 - createSprite(mainCharacterImage).width / 4,
        y: 600 / 2 - createSprite(mainCharacterImage).height / 4,
    },
    image: createSprite(mainCharacterImage),
    scale: 2.3,
    frames: {
        fpsY: 4,
        fpsX: 4,
        frameX: 0,
        frameY: 0,
        animationFrame: 9,
    }
});
