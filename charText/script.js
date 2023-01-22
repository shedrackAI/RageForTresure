const container = document.querySelector(".text_field")

const speeds = {
    pause: 580,
    slow: 128,
    normal: 70,
    fast: 40
};

const textLines = [
    {string: "Hey.", speed: speeds.normal},
    {string: "What's up!", speed: speeds.normal},
    {string: "I'm great!", speed: speeds.fast},
]

const characters = [];
textLines.forEach((line, index) => {
    if (index < textLines.length - 1) {
        line.string += ' ';
    }

    line.string.split("").forEach(character => {
        const span = document.createElement("span");
        span.textContent = character;
        container.appendChild(span)
        characters.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.speed,
            classes: line.classes || []
        })
    })
})

function revealOneCharacter(list) {
    const next = list.splice(0, 1)[0];
    next.span.classList.add("revealed");

    const delay = next.isSpace ? 0 : next.delayAfter;

    if (list.length > 0) {
        setTimeout(() => {
            revealOneCharacter(list)
        }, delay);
    }
}

revealOneCharacter(characters)