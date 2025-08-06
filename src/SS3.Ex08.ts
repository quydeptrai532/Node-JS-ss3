function add( b: number|string, c: number|string): number {
    const num1=typeof b==="string" ?parseFloat(b):b;
    const num2=typeof c==="string" ?parseFloat(c):c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`)
        return 0
    }
    return num1+num2
}
function subtract( b: number|string, c: number|string): number {
    const num1=typeof b==="string" ?parseFloat(b):b;
    const num2=typeof c==="string" ?parseFloat(c):c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`)
        return 0
    }
    return num1-num2
}
function multiply( b: number|string, c: number|string): number {
    const num1=typeof b==="string" ?parseFloat(b):b;
    const num2=typeof c==="string" ?parseFloat(c):c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`)
        return 0
    }
    return num1*num2
}   

function divine( b: number|string, c: number|string): number {
    const num1=typeof b==="string" ?parseFloat(b):b;
    const num2=typeof c==="string" ?parseFloat(c):c;
    if (isNaN(num1) || isNaN(num2)) {
        console.log(`Sai kieu du lieu truyen vao`)
        return 0
    }
    return num1/num2
}
let result:number=add(19,7)
let result2:number=subtract(19,7)
let result3:number=multiply(19,7)
let result4:number=divine(19,7)

console.log(result)
console.log(result2)
console.log(result3)
console.log(result4)