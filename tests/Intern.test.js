const Intern = require("../lib/Intern");

test('Should return all properties separated by commas', () => {
    let testEmployee = new Intern("John", "101", "john@fake.com", "SanFranU");
    let str = `${testEmployee.getName}, ${testEmployee.getId}, ${testEmployee.getEmail}, ${testEmployee.getRole}, ${testEmployee.getSchool}`
    expect(str).toBe("John, 101, john@fake.com, Intern, SanFranU")
})