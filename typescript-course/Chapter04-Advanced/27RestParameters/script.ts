const a1 = [1, 2, 3];

function arraySum(numbers: number[]) {
    let result = 0;
    numbers.forEach((element) => (result += element));
    return result;
}

// Rest parameters are like varargs
function sum(...numbers: number[]) {
    let result = 0;
    numbers.forEach((element) => (result += element));
    return result;
}

console.log(arraySum([1, 2, 3]));
console.log(sum(1, 2, 3));
console.log(sum());
