function add(b, c) {
    const num1 = typeof b === "string" ? parseFloat(b) : b;
    const num2 = typeof c === "string" ? parseFloat(c) : c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`);
        return 0;
    }
    return num1 + num2;
}
function subtract(b, c) {
    const num1 = typeof b === "string" ? parseFloat(b) : b;
    const num2 = typeof c === "string" ? parseFloat(c) : c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`);
        return 0;
    }
    return num1 - num2;
}
function multiply(b, c) {
    const num1 = typeof b === "string" ? parseFloat(b) : b;
    const num2 = typeof c === "string" ? parseFloat(c) : c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`);
        return 0;
    }
    return num1 * num2;
}
function divine(b, c) {
    const num1 = typeof b === "string" ? parseFloat(b) : b;
    const num2 = typeof c === "string" ? parseFloat(c) : c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`);
        return 0;
    }
    return num1 / num2;
}
let result = add(19, 7);
let result2 = subtract(19, 7);
let result3 = multiply(19, 7);
let result4 = divine(19, 7);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
export {};
