class User {
    constructor(public id: number, public name: string) {}
}

class Admin {
    constructor(public name: string) {}
}

function printInfo(arg: User | Admin) {
    if ('id' in arg) {
        console.log(`User(${arg.id}, ${arg.name})`);
    } else {
        console.log(`Admin(${arg.name})`);
    }
}

function printInfo2(arg: User | Admin) {
    if (arg instanceof User) {
        console.log(`User(${arg.id}, ${arg.name})`);
    } else {
        console.log(`Admin(${arg.name})`);
    }
}

const u1: User = new User(1, 'Max');
const u2: Admin = new Admin('Superadmin');
printInfo(u1);
printInfo(u2);
printInfo2(u1);
printInfo2(u2);
