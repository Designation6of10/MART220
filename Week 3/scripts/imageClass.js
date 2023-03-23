class ImageClass {
    constructor(img,pos,scale = null) {
        this.img = img;
        this.pos = pos;
        this.imageObject = null;
        this.scale = scale;
    }

    setPos(pos) {
        this.pos = pos;
    }

    get() {
        if (!this.imageObject) {
            this.imageObject = loadImage(this.img);
        }
        return this.imageObject;
    }

    display() {
        image(this.img, this.pos.x, this.pos.y, (this.width * this.scale), (this.height * this.scale));
        return this.img;
    }
}