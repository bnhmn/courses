type Printable = number | string | boolean;

function print(arg: Printable) {
    console.log(arg);
}

print(1);
print('Hello World');
print(true);
