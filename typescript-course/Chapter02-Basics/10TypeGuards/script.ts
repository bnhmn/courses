function printAll(arg: string | string[]) {
    if (typeof arg === 'object') {
        console.log('Printing Array: [');
        for (const s of arg) {
            console.log(s);
        }
        console.log(']');
    }
    if (typeof arg === 'string') {
        console.log(`Printing string: ${arg}`);
    }
}

printAll('Jan');
printAll(['Max', 'Karl']);
console.log();

// Truthiness Narrowing
const num = 0;
const text = '';
const array: string[] = [];
const nul = null;
const undef = undefined;

if (num) {
    console.log(`Number ${num} is: true`);
} else {
    console.log(`Number ${num} is: false`);
}
if (text) {
    console.log(`Empty String is: true.`);
} else {
    console.log(`Empty String is: false`);
}
if (array) {
    console.log(`Empty Array is: true`);
} else {
    console.log(`Empty Array is: false`);
}
if (array?.length) {
    console.log('Array is NOT empty!');
} else {
    console.log('Array is EMPTY!');
}
if (nul) {
    console.log(`Null is: true`);
} else {
    console.log(`Null is: false`);
}
if (undef) {
    console.log(`Undefined is: true`);
} else {
    console.log(`Undefined is: false`);
}
