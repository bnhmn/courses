export class Point2D {
    constructor(protected _xPos: number = 0, protected _yPos: number = 0) {}

    get xPos() {
        return this.xPos;
    }

    set xPos(xPos: number) {
        this._xPos = xPos;
    }

    get yPos() {
        return this._yPos;
    }

    set yPos(yPos: number) {
        this._yPos = yPos;
    }
}

export class Point3D extends Point2D {
    constructor(
        _xPos: number = 0,
        _yPos: number = 0,
        protected _zPos: number = 0,
    ) {
        super(_xPos, _yPos);
    }

    get zPos() {
        return this._zPos;
    }

    set zPos(zPos: number) {
        this._zPos = zPos;
    }
}

export function printPoint(point: Point2D) {
    console.log(point);
}
