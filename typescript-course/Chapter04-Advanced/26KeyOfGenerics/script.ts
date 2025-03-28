class User {
    constructor(public id: number, public name: string, public age: number) {}
}

function logUserProperty<T>(obj: T, key: keyof T) {
    console.log(`${String(key)}: ${obj[key]}`);
}

const u1: User = new User(1, 'Max', 22);
logUserProperty(u1, 'id');
logUserProperty(u1, 'name');
logUserProperty(u1, 'age');
logUserProperty({ id: 2, role: 'Instructor' }, 'role');
