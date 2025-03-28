let arr = [1, 2, 3];
let tupl: [number, number, number] = [1, 2, 3];

function printArray(arr: number[]) {
    console.log(arr);
}
function printTuple(tpl: [number, number, number]) {
    console.log(tpl);
}

printArray(arr);
printTuple(tupl);
printTuple(arr as [number, number, number]);
