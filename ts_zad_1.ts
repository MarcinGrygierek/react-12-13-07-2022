const add = (a: number, b: number): number => {
    return a + b;
}

const subtract = (a: number, b: number): number => {
    return a - b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

const divide = (a: number, b: number): number => {
    if (b === 0) throw new Error('You can not divide by 0');
    return a / b;
}

try {
    console.log(add(31, 2));
    console.log(subtract(12, 12));
    console.log(multiply(3, 12));
    console.log(divide(12, 21));
    console.log(divide(12, 0));
} catch (e) {
    console.log('An error happened', e);
}

console.log('Next part of app')