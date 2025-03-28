class Point2D {
    // public, protected or private.
    constructor(protected _xPos: number = 0, protected _yPos: number = 0) {}

    // Methods are public by default!
    get xPos(): number {
        return this.xPos;
    }

    set xPos(xPos: number) {
        this._xPos = xPos;
    }

    get yPos(): number {
        return this._yPos;
    }

    set yPos(yPos: number) {
        this._yPos = yPos;
    }
}

const p1 = new Point2D(1, 1);
console.log(p1);
p1.xPos = 3;
p1.yPos = 3;
console.log(p1);
