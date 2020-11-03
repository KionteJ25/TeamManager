// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        "Intern"
    }

    getOfficeNumber() {
        return this.school;
    }
}

module.exports = Intern;