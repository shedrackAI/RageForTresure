const blueSlimeImage = '../GameAssets/props/slime-blue.png';
let slimes = []

let randomSlimePosition = [
    {
        x: 1000,
        y: 930,
    },
    {
        x: 1490,
        y: 270,
    },
    {
        x: 700,
        y: 1000,
    },
    {
        x: 1300,
        y: 1700,
    },
    {
        x: 1300,
        y: 1900,
    },
    {
        x: 1900,
        y: 1400,
    },
    {
        x: 700,
        y: 1000,
    },
    {
        x: 1100,
        y: 400,
    },
    {
        x: 1840,
        y: 480,
    },
]

let num = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < 3; i++) {
    let randomNum = num[Math.floor(Math.random() * num.length)];
    slimes.push(new NPC({
            position: {
                x: randomSlimePosition[randomNum].x,
                y: randomSlimePosition[randomNum].y
            },
            movement: {
                x: 0,
                y: 0
            },
            image: createSprite(blueSlimeImage),
            scale: 2,//2
            frames: {
                fpsX: 4,
                fpsY: 1,
                frameX: 0,
                frameY: 0,
                animationFrame: 14
            },
        }));
}