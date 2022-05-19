const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe("Set office number via constructor argument", () => {
    const testVal = 100;
    const e = new Manager("Phil", 1, "Phil@imadoctor.com", testVal);
    expect(e.officeNumber).toBe(testVal);
})