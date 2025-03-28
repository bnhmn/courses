interface User {
    name: string;
    age: number;
    courses?: string[]; // optional property
}

interface Point2D {
    xPos: number;
    yPos: number;
    readonly name: string; // readonly property
}

const u1: User = { name: 'Jonas', age: 25 };
const p1: Point2D = { xPos: 0, yPos: 0, name: 'origin' };
const p2: Point2D = { xPos: 1, yPos: 1, name: 'point (1,1)' };
p2.name = '(1,1)';
