class Point2D {
    constructor(public xPos: number = 0, public yPos: number = 0) {}
}

class Point3D extends Point2D {
    constructor(xPos: number = 0, yPos: number = 0, public zPos: number = 0) {
        super(xPos, yPos);
    }
}

// In TypeScript you can only overload function signatures to enable IDE assist
function printCoordinates(point: Point3D): void;
function printCoordinates(point: Point2D): void;
function printCoordinates(x: number, y: number): void;
function printCoordinates(x: number, y: number, z: number): void;

// In reality there can always only be a single implementation
function printCoordinates(arg1: unknown, arg2?: unknown, arg3?: unknown) {
    if (arg1 instanceof Point3D) {
        const point = arg1 as Point3D;
        console.log(`(${point.xPos}|${point.yPos}|${point.zPos})`);
    } else if (arg1 instanceof Point2D) {
        const point = arg1 as Point2D;
        console.log(`(${point.xPos}|${point.yPos})`);
    } else if (typeof arg3 === 'number') {
        console.log(`(${arg1}|${arg2}|${arg3})`);
    } else {
        console.log(`(${arg1}|${arg2})`);
    }
}

const p1 = new Point2D(1, 1);
const p2 = new Point3D(2, 2, 2);
printCoordinates(p1);
printCoordinates(p2);
printCoordinates(3, 3);
printCoordinates(4, 4, 4);
