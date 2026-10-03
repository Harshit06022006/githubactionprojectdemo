const {
    add,
    mod,
    subtract,
    multiply,
    divide
} = require("../src/calculator");

test("addition", () => {
    expect(add(10, 5)).toBe(15);
});

test("subtraction", () => {
    expect(subtract(10, 5)).toBe(5);
});

test("multiplication", () => {
    expect(multiply(10, 5)).toBe(50);
});

test("division", () => {
    expect(divide(10, 5)).toBe(2);
});
test("mod", () => {
    expect(mod(10, 5)).toBe(0);
});

test("division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});