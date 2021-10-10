const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('Should return all properties separated by commas', () => {
    let testEmployee = new Employee("John", "101", "john@fake.com");
    let str = `${testEmployee.getName}, ${testEmployee.getId}, ${testEmployee.getEmail}, ${testEmployee.getRole}`
    expect(str).toBe("John, 101, john@fake.com, Employee")
})