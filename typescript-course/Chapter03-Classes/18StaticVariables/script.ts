class Point2D {
    static NUM_DIMENSIONS = 2;

    constructor(public xPos = 0, public yPos = 0) {}

    getNumDimensions() {
        return Point2D.NUM_DIMENSIONS;
    }
}

const p1 = new Point2D(1, 1);
const p2 = new Point2D(2, 2);
console.log(p1);
console.log(Point2D.NUM_DIMENSIONS);
console.log(p1.getNumDimensions());
console.log(p2.getNumDimensions());

Point2D.NUM_DIMENSIONS = -1;
console.log(Point2D.NUM_DIMENSIONS);
console.log(p1.getNumDimensions());
console.log(p2.getNumDimensions());
