function printFirstElement<T>(arr: T[]) {
    console.log(arr[0]);
}

printFirstElement([1, 2, 3]);
printFirstElement(['Max', 'Jonas', 'Karl']);
printFirstElement([
    { name: 'Max', age: 20 },
    { name: 'Jonas', age: 30 },
]);

function map<InputT, OutputT>(arr: InputT[], fn: (arg: InputT) => OutputT) {
    return arr.map(fn);
}

const arrBefore = [4, 5, 6];
const arrAfter = map(arrBefore, (arg) => `N${arg}`);
console.log(`Array Before: ${arrBefore}`);
console.log(`Array After : ${arrAfter}`);
