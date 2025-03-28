type User = {
    name: string;
    age: number;
    courses: string[];
};

type Role = {
    role?: string;
};

type UdemyUser = User & Role;

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
