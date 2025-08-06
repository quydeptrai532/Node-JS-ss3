// Enum SystemMode
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
// Hàm logMovement
function logMovement(direction) {
    console.log(`🔄 Moving ${direction}`);
}
// Hàm setMode
function setMode(mode) {
    console.log(`⚙️ System set to ${mode} mode`);
}
// Hàm processInput
function processInput(input) {
    console.log(`📥 Received input (any): ${input}`);
    if (typeof input === "string") {
        console.log(`🔍 Input length: ${input.length}`);
    }
}
// Hàm validateInput
function validateInput(input) {
    if (typeof input === "number") {
        console.log(`✅ Valid number input: ${input}`);
    }
    else {
        console.log(`❌ Invalid input type`);
    }
}
// Hàm crash
function crash(message) {
    throw new Error(`💥 SYSTEM CRASHED: ${message}`);
}
// Biến dùng annotation
let speed = 10;
// Biến dùng inference
let robotName = "AlphaBot";
// Biến dùng enum
let currentMode = SystemMode.AUTO;
// Gọi hàm
logMovement("forward");
logMovement("left");
setMode(SystemMode.AUTO);
setMode(SystemMode.MANUAL);
processInput("Hello robot!");
processInput(12345);
validateInput("string");
validateInput(78);
// Gây crash hệ thống
try {
    crash("Overheat detected!");
}
catch (error) {
    console.log(error.message);
}
export {};
