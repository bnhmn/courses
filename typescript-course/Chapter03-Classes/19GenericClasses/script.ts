class Container<T> {
    constructor(public content: T) {}

    printContent() {
        console.log(this.content);
    }
}

const c1 = new Container('Hello World!');
const c2 = new Container(42);
const c3 = new Container(true);
c1.printContent();
c2.printContent();
c3.printContent();

// Generic class with type constraint
interface Sized {
    length: number;
}

// Multiple constrains possible using &
class ContainerS<T extends Sized> {
    constructor(public content: T) {}

    printContent() {
        console.log(this.content);
    }
}

const c4 = new ContainerS('Hello World!');
const c5 = new ContainerS([1, 2, 3]);
c4.printContent();
c5.printContent();
// const c6 = new ContainerS(42);
// const c7 = new ContainerS(true);
