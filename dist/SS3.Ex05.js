var _a, _b;
let firstName = "John";
let lastName = "Doe";
let fullName;
if (firstName[0] === ((_a = firstName[0]) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase())) {
    firstName = ((_b = firstName[0]) === null || _b === void 0 ? void 0 : _b.toLocaleUpperCase) + firstName.slice(1);
}
fullName = firstName + ` ` + lastName;
console.log(fullName);
export {};
