const Employee = require('../lib/Employee');

describe('Employee', () => {
  it("Begins the instance of employee", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  it("Can set a name with the constructor arguments", () => {
    const name = "Jack";
    const e = new Employee(name);
    expect(e.name).toBe(name)
  })
})