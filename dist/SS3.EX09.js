let but1 = document.querySelector(".cong");
let but2 = document.querySelector(".tru");
let but3 = document.querySelector(".nhan");
let but4 = document.querySelector(".chia");
let but5 = document.querySelector(".luythua");
let but6 = document.querySelector(".canbac");
let but7 = document.querySelector(".giaithua");
//Hàm tính toán
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
function power(b, c) {
    const num1 = typeof b === "string" ? parseFloat(b) : b;
    const num2 = typeof c === "string" ? parseFloat(c) : c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`);
        return 0;
    }
    if (num2 === 0) {
        return 1;
    }
    return num1 * power(num1, num2 - 1);
}
function root(b, c) {
    const num1 = typeof b === "string" ? parseFloat(b) : b;
    const num2 = typeof c === "string" ? parseFloat(c) : c;
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        console.log(`Sai kiểu dữ liệu truyền vào`);
        return 0;
    }
    return Math.pow(num1, 1 / num2);
}
function factorial(b) {
    const num1 = typeof b === "string" ? parseFloat(b) : b;
    if (isNaN(num1)) {
        console.log(`Sai kiểu dữ liệu truyền vào`);
        return 0;
    }
    if (num1 === 0 || num1 === 1) {
        return 1;
    }
    return num1 * factorial(num1 - 1);
}
//sự kiến bấm
but1.addEventListener("click", function () {
    let input = document.getElementById("input");
    let inputValue = input.value;
    let input2 = document.getElementById("input2");
    let input2Value = input2.value;
    alert(add(inputValue, input2Value));
});
but2.addEventListener("click", function () {
    let input = document.getElementById("input");
    let inputValue = input.value;
    let input2 = document.getElementById("input2");
    let input2Value = input2.value;
    alert(subtract(inputValue, input2Value));
});
but3.addEventListener("click", function () {
    let input = document.getElementById("input");
    let inputValue = input.value;
    let input2 = document.getElementById("input2");
    let input2Value = input2.value;
    alert(multiply(inputValue, input2Value));
});
but4.addEventListener("click", function () {
    let input = document.getElementById("input");
    let inputValue = input.value;
    let input2 = document.getElementById("input2");
    let input2Value = input2.value;
    alert(divine(inputValue, input2Value));
});
but5.addEventListener("click", function () {
    let input = document.getElementById("input");
    let inputValue = input.value;
    let input2 = document.getElementById("input2");
    let input2Value = input2.value;
    alert(power(inputValue, input2Value));
});
but6.addEventListener("click", function () {
    const input = document.getElementById("input");
    const input2 = document.getElementById("input2");
    alert(root(input.value, input2.value));
});
but7 === null || but7 === void 0 ? void 0 : but7.addEventListener("click", function () {
    const input = document.getElementById("input");
    alert(factorial(input.value));
});
export {};
