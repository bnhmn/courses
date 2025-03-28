function add(arg1: number, arg2: number): number {
    return arg1 + arg2;
}

function concatenate(arg1: string, arg2: string): string {
    return arg1 + arg2;
}

function check(arg: number): boolean {
    if (arg > 2) {
        return false;
    }

    return true;
}

const a1 = 2;
const a2 = 5;

const r1 = add(a1, a2);
console.log(r1);

const a3 = 'Jan';
const a4 = ' Schaffranek';
const r2 = concatenate(a3, a4);
console.log(r2);

const a5 = 3;
const r3 = check(a5);
