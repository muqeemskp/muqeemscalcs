//Quadratic Formula

function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        return []; // No real roots
    }
}

//Basic Math

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

function add(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function multiply(...numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}

module.exports = {
    add, subtract, divide, multiply, solveQuadratic
}
