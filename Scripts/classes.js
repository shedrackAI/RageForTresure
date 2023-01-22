class Sprite {
    constructor({
        position,
        image,
        scale,
        frames
    }) {
        this.position = position;
        this.image = image;
        this.frames = frames
        this.scale = scale;
        this.width = this.image.width / this.frames.fpsX;
        this.height = this.image.height / this.frames.fpsY;
        this.elapesd = 0;
        this.isMoving = false;
    }

    draw() {
        ctx.drawImage(
            this.image, // Image to Draw on Canvas
            this.frames.frameX * this.width, //Crop Position X
            this.frames.frameY * this.height, //Crop Position Y
            this.width, //Crop Width
            this.height, //Crop Height
            this.position.x, // Image Position X
            this.position.y, //Image Position Y
            this.width * this.scale, //Image Width
            this.height * this.scale, //Image Height
        )
    }

    update() {
        this.draw()
        if (!this.isMoving) {
            this.frames.frameX = 0;
        } else {
            this.elapesd++;
            // Slow Down The Animation 9 Frames per Seconds
            if (this.elapesd % this.frames.animationFrame === 0) {
                if (this.frames.frameX < this.frames.fpsX - 1) {
                    this.frames.frameX++;
                } else {
                    this.frames.frameX = 0;
                }
            }
        }

    }
}

class Map {
    constructor({ position, image }) {
        this.position = position;
        this.image = image;
        this.width = this.image.width;
        this.height = this.image.height;
    }
    draw() {
        ctx.drawImage(
            this.image, // Image to Draw on Canvas
            this.position.x, //Image Position X
            this.position.y, //Image Position y
        )
    }
    update() {
        this.draw()
    }
}

class Boundary {
    constructor({ position }) {
        this.position = position;
        this.width = 32
        this.height = 32
    }

    draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0)';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

class EnterBuliding {
    constructor({ position }) {
        this.position = position;
        this.width = 38.6
        this.height = 38.6
    }

    draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.0)';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
    };
}

class CollisionBlock {
    constructor({ position, offset, width, height }) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.offset = offset;

    }

    draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update({ follow }) {
        this.draw()
        this.position.x = follow.position.x + follow.width - this.offset.x
        this.position.y = follow.position.y + follow.height - this.offset.y
    }

}

class NpcCollisionBlock {
    constructor({ position, offset, width, height, movement = { x: 0, y: 0 } }) {
        this.position = position;
        this.width = width;
        this.height = height;
        this.offset = offset;
        this.movement = movement;

    }

    draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update({ follow }) {
        this.draw()
        this.position.x = follow.position.x + follow.width + this.offset.x + this.movement.x
        this.position.y = follow.position.y + follow.height + this.offset.y + this.movement.y
    }

}

class SingleImage {
    constructor({ position, scale, image, offset }) {
        this.position = position;
        this.image = image
        this.scale = scale
        this.offset = offset
        this.width = this.image.width;
        this.height = this.image.height
    }
    draw() {
        ctx.drawImage(
            this.image,
            0, 0,
            this.width,
            this.height,
            this.position.x,
            this.position.y,
            this.width * this.scale,
            this.height * this.scale
        )
    }
    update({ follow }) {
        this.draw()
        this.position.x = follow.position.x + this.offset.x  //+ follow.width / 2 - this.dividedWidth
        this.position.y = follow.position.y + this.offset.y// + follow.height / 2 - this.dividedHeight
    }
}

class Hover {
    constructor({ position, image, scale, frames, offset }) {
        this.position = position;
        this.image = image;
        this.frames = frames
        this.scale = scale;
        this.offset = offset;
        this.width = this.image.width / this.frames.fpsX;
        this.height = this.image.height / this.frames.fpsY;
        this.elapesd = 0;
        this.isMoving = false;
    }

    draw() {
        ctx.drawImage(
            this.image, // Image to Draw on Canvas
            this.frames.frameX * this.width, //Crop Position X
            this.frames.frameY * this.height, //Crop Position Y
            this.width, //Crop Width
            this.height, //Crop Height
            this.position.x, // Image Position X
            this.position.y, //Image Position Y
            this.width * this.scale, //Image Width
            this.height * this.scale, //Image Height
        )
    }

    update({ follow }) {
        this.draw()
        if (!this.isMoving) {
            this.frames.frameX = 0;
        } else {
            this.elapesd++;
            // Slow Down The Animation 9 Frames per Seconds
            if (this.elapesd % this.frames.animationFrame === 0) {
                if (this.frames.frameX < this.frames.fpsX - 1) {
                    this.frames.frameX++;
                } else {
                    this.frames.frameX = 0;
                }
            }
        }

        this.position.x = follow.position.x + this.offset.x
        this.position.y = follow.position.y + this.offset.y
    }
}

class NPC {
    constructor({ position, image, scale, frames, movement = { x: 0, y: 0 } }) {
        this.position = position;
        this.image = image;
        this.frames = frames
        this.scale = scale;
        this.width = this.image.width / this.frames.fpsX;
        this.height = this.image.height / this.frames.fpsY;
        this.elapesd = 0;
        this.isMoving = false;
        this.movement = movement;
    }

    draw() {
        ctx.drawImage(
            this.image, // Image to Draw on Canvas
            this.frames.frameX * this.width, //Crop Position X
            this.frames.frameY * this.height, //Crop Position Y
            this.width, //Crop Width
            this.height, //Crop Height
            this.position.x + this.movement.x, // Image Position X
            this.position.y + this.movement.y, //Image Position Y
            this.width * this.scale, //Image Width
            this.height * this.scale, //Image Height
        )
    }

    update() {
        this.draw()
        if (!this.isMoving) {
            this.frames.frameX = 0;
        } else {
            this.elapesd++;
            // Slow Down The Animation 9 Frames per Seconds
            if (this.elapesd % this.frames.animationFrame === 0) {
                if (this.frames.frameX < this.frames.fpsX - 1) {
                    this.frames.frameX++;
                } else {
                    this.frames.frameX = 0;
                }
            }
        }

    }
}

class Animal {
    constructor({ position, image, scale, frames, movement = { x: 0, y: 0 } }) {
        this.position = position;
        this.image = image;
        this.frames = frames
        this.scale = scale;
        this.width = this.image.width / this.frames.fpsX;
        this.height = this.image.height / this.frames.fpsY;
        this.elapesd = 0;
        this.isMoving = false;
        this.movement = movement;
    }

    draw() {
        ctx.drawImage(
            this.image, // Image to Draw on Canvas
            this.frames.frameX * this.width, //Crop Position X
            this.frames.frameY * this.height, //Crop Position Y
            this.width, //Crop Width
            this.height, //Crop Height
            this.position.x + this.movement.x, // Image Position X
            this.position.y + this.movement.y, //Image Position Y
            this.width * this.scale, //Image Width
            this.height * this.scale, //Image Height
        )
    }

    update() {
        this.draw()
        if (!this.isMoving) {
            this.frames.frameX = 0;
        } else {
            this.elapesd++;
            // Slow Down The Animation 9 Frames per Seconds
            if (this.elapesd % this.frames.animationFrame === 0) {
                if (this.frames.frameX < this.frames.fpsX - 1) {
                    this.frames.frameX++;
                } else {
                    this.frames.frameX = 0;
                }
            }
        }

    }
}

class AnimalWithShadow {
    constructor({
        position,
        image,
        shadowOffset,
        shadowImage,
        scale,
        shadowScale,
        frames,
        shadowFrames,
        movement = { x: 0, y: 0 } }) {
        this.position = position;
        this.image = image;
        this.frames = frames
        this.scale = scale;
        this.width = this.image.width / this.frames.fpsX;
        this.height = this.image.height / this.frames.fpsY;
        this.isMoving = false;
        this.movement = movement;
        this.elapesd = 0;
        //Shadow
        this.shadowFrames = shadowFrames;
        this.shadowScale = shadowScale;
        this.shadowImage = shadowImage;
        this.shadowOffset = shadowOffset;
        this.shadowWidth = this.shadowImage.width / this.shadowFrames.fpsX;
        this.shadowHeight = this.shadowImage.height / this.shadowFrames.fpsY;
    }

    draw() {

        ctx.drawImage(
            this.shadowImage,
            this.shadowFrames.frameX * this.shadowWidth, //Crop Position X
            this.shadowFrames.frameY * this.shadowHeight, //Crop Position Y
            this.shadowWidth,
            this.shadowHeight,
            this.position.x + this.shadowOffset.x,
            this.position.y + this.shadowOffset.y,
            this.width * this.shadowScale,
            this.height * this.shadowScale
        )
        ctx.drawImage(
            this.image, // Image to Draw on Canvas
            this.frames.frameX * this.width, //Crop Position X
            this.frames.frameY * this.height, //Crop Position Y
            this.width, //Crop Width
            this.height, //Crop Height
            this.position.x + this.movement.x, // Image Position X
            this.position.y + this.movement.y, //Image Position Y
            this.width * this.scale, //Image Width
            this.height * this.scale, //Image Height
        )
    }

    update() {
        this.draw()
        if (!this.isMoving) {
            this.frames.frameX = 0;
        } else {
            this.elapesd++;
            // Slow Down The Animation 9 Frames per Seconds
            if (this.elapesd % this.frames.animationFrame === 0) {
                if (this.frames.frameX < this.frames.fpsX - 1) {
                    this.frames.frameX++;
                } else {
                    this.frames.frameX = 0;
                }
            }
        }
    }
}