class Point2D {
    xPos: number;
    yPos: number;

    constructor(xPos: number = 0, yPos: number = 0) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

class Point2DB {
    constructor(public xPos: number = 0, public yPos: number = 0) {}
}

class Point3D extends Point2D {
    zPos: number;

    constructor(xPos: number = 0, yPos: number = 0, zPos: number = 0) {
        super(xPos, yPos);
        this.zPos = zPos;
    }
}

const p0 = new Point2D();
const p1 = new Point2D(1, 1);
const p2 = new Point2DB(2, 2);
console.log(p0);
console.log(p1);
console.log(p2);

const p3 = new Point3D(1, 2, 3);
console.log(p3);
console.log(p3 instanceof Point3D);
console.log(p3 instanceof Point2D);
