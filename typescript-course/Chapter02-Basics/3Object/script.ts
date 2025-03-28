type User = {
    name: string;
    age: number;
    courses: string[];
};

const userJan = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
};

const userDaniel = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#'],
};

function printUser(user: User) {
    console.log(user);
}

function printUser2(user: { name: string; age: number; courses: string[] }) {
    console.log(user);
}

printUser(userJan);
printUser(userDaniel);
printUser2(userJan);
