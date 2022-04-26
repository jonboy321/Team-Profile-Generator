class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}
// let employee1 = new Employee("John", "33", "johnf@mail.com");
// console.log(employee1);
// console.log(employee1.getRole());
module.exports = Employee;