interface User {
    name: string;
    age: number;
    courses: string[];
}

interface UdemyUser extends User {
    role?: Role; // Optionales Attribut
}

enum Role {
    STUDENT = 'Student',
    INSTRUCTOR = 'Instructor',
    ADMIN = 'Admin',
}

const userJan: UdemyUser = {
    name: 'Jan',
    age: 27,
    courses: ['C', 'C++', 'Python', 'TypeScript'],
    role: Role.INSTRUCTOR,
};

const userDaniel: UdemyUser = {
    name: 'Daniel',
    age: 24,
    courses: ['Java', 'C#', 'Spring'],
    role: Role.STUDENT,
};

function printUser(user: UdemyUser) {
    console.log(`${user.name} is ${user.age} and has role '${user.role}'`);
}

printUser(userJan);
printUser(userDaniel);
