import { Point2D, Point3D, printPoint } from './point';

// For Client side js:
// ----------------------------------------------------------
// import { Point2D, Point3D, printPoint } from './point.js';
// ----------------------------------------------------------
// And comment out "module": "CommonJS" in tsconfig.json

const p1 = new Point2D(1, 1);
const p2 = new Point3D(2, 2, 2);
printPoint(p1);
printPoint(p2);

// import * as point from './point';

// const p3 = new point.Point3D(3, 3, 3);
// point.printPoint(p3);
