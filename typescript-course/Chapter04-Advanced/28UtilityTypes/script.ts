interface User {
    name: string;
    email?: string;
    id?: number;
}

const u1: User = { name: 'Max', email: 'max.mustermann@gmail.com' };
const u2: User = { ...u1, id: 1 };
console.log(u1);
console.log(u2);
console.log();

// Partial types
// -------------
// Partial types are types where all attributes are optional.
// Useful for patch semantics:

type PartialUser = Partial<User>;
function updateUser(user: User, data: PartialUser) {
    return {
        ...user,
        ...data,
    };
}

const u3: User = { name: 'Tim' };
const u4: User = updateUser(u3, { email: 'tim@gmail.com' });
console.log(u3);
console.log(u4);
console.log();

// Required types   : types where all attributes are required.
// Pick types       : include a subset of a classes' properties.
// Omit types       : omits all specified attributes of a class.

type RequiredUser = Required<User>;
type PickedUser = Pick<User, 'email' | 'name'>;
type Omitted = Omit<User, 'name' | 'id'>;

// Destructuring assignment (aka unpacking)
// ----------------------------------------
// The destructuring assignment syntax ... is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.

let [a, b] = [10, 20];
let [c, d, ...rest] = [30, 40, 50, 60, 70];
let { email, ...rest2 } = u1;
console.log(a, b);
console.log(rest);
console.log(email, rest2);
console.log();
