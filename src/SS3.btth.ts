// Enum SystemMode
enum SystemMode {
  AUTO = "AUTO",
  MANUAL = "MANUAL",
}

// Literal type Direction
type Direction = "left" | "right" | "forward" | "backward";

// Hàm logMovement
function logMovement(direction: Direction): void {
  console.log(`🔄 Moving ${direction}`);
}

// Hàm setMode
function setMode(mode: SystemMode): void {
  console.log(`⚙️ System set to ${mode} mode`);
}

// Hàm processInput
function processInput(input: any): void {
  console.log(`📥 Received input (any): ${input}`);
  if (typeof input === "string") {
    console.log(`🔍 Input length: ${input.length}`);
  }
}

// Hàm validateInput
function validateInput(input: unknown): void {
  if (typeof input === "number") {
    console.log(`✅ Valid number input: ${input}`);
  } else {
    console.log(`❌ Invalid input type`);
  }
}

// Hàm crash
function crash(message: string): never {
  throw new Error(`💥 SYSTEM CRASHED: ${message}`);
}

// Biến dùng annotation
let speed: number = 10;

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
} catch (error: any) {
  console.log(error.message);
}
