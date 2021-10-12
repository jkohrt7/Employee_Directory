const Manager = require("../lib/Manager");

test('Should return all properties separated by commas', () => {
    let testEmployee = new Manager("John", "101", "john@fake.com", "D12");
    let str = `${testEmployee.getName}, ${testEmployee.getId}, ${testEmployee.getEmail}, ${testEmployee.getRole}, ${testEmployee.officeNumber}`
    expect(str).toBe("John, 101, john@fake.com, Manager, D12")
})