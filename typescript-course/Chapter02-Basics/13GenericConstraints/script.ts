interface Sized {
    length: number;
}

function bigger<T extends Sized>(arr1: T, arr2: T) {
    return arr1.length >= arr2.length ? arr1 : arr2;
}

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6];
const bigg = bigger(arr1, arr2);
console.log(`Bigger Array: ${bigg}`);

interface Grades {
    grades: number[];
    length: number;
}
const janGrades: Grades = {
    grades: [1, 2, 2],
    length: 3,
};
const maxGrades: Grades = {
    grades: [5, 6, 6, 3, 4],
    length: 5,
};
console.log(`Bigger grades: ${JSON.stringify(bigger(janGrades, maxGrades))}`);
