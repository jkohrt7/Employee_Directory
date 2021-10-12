const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Should return all properties separated by commas', () => {
    let testEmployee = new Engineer("John", "101", "john@fake.com", "johnHub");
    let str = `${testEmployee.getName}, ${testEmployee.getId}, ${testEmployee.getEmail}, ${testEmployee.getRole}, ${testEmployee.github}`
    expect(str).toBe("John, 101, john@fake.com, Engineer, johnHub")
})