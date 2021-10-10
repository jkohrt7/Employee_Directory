
class Employee {
    constructor(name, id, email) {
        this.name = name; 
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    get getName() {
        return this.name;
    }

    get getId() {
        return this.id;
    }

    get getEmail() {
        return this.email;
    }

    get getRole() {
        return this.role;
    }
}

module.exports = Employee;