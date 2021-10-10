const { expect } = require("@jest/globals");
const testClass = require("./lib/Employee");

test('does a thing', () => {
    expect(testClass.functionHere().toBe("value"))
})