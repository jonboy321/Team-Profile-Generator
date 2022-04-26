const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        // this.name = name;
        // this.id= id;
        // this.email = email;
        super(name, id, email);
        this.officeNumber = officeNumber; 
    }

    getRole() {
        return "Manager";
    }
}

// const manager1 = new Manager("Peter", "14", "peter@mail.com", "555")

// console.log(manager1);
// console.log(manager1.getRole())

module.exports = Manager;