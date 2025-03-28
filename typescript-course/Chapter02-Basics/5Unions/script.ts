function add(arg1: number | string, arg2: number | string) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }
    return;
}

console.log(add('Jan', ' Schaffranek'));
console.log(add('Jan', 0));
