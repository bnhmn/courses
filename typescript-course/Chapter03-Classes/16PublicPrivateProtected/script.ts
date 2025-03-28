class Point2D {
    // public, protected or private.
    constructor(protected xPos: number = 0, protected yPos: number = 0) {}
}

const p1 = new Point2D(1, 1);
console.log(p1);
p1.xPos = 3;
console.log(p1);
