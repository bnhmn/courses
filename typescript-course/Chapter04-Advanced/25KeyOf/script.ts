class User {
    constructor(public id: number, public name: string, public age: number) {}
}

function logUserProperty(user: User, key: keyof User) {
    console.log(`${key}: ${user[key]}`);
}

const u1: User = new User(1, 'Max', 22);
logUserProperty(u1, 'id');
logUserProperty(u1, 'name');
logUserProperty(u1, 'age');
