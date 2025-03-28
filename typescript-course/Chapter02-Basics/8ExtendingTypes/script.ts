interface User {
    name: string;
    age: number;
    courses: string[];
}

interface UdemyUser extends User {
    role?: string; // Optionales Attribut
}

const userJan: UdemyUser = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    role: 'Instructor',
};

const userDaniel: UdemyUser = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#', 'Spring'],
};

function printUser(user: UdemyUser) {
    console.log(`${user.name} has role '${user.role}'`);
}

printUser(userJan);
printUser(userDaniel);
