const Intern = require('../lib/Intern');

describe("Set school via constructor", () => {
    const testVal = 'UCF';
    const e = new Intern('Sally', 3, 'sallyg@mail.com', testVal);
    expect(e.school).toBe(testVal);
})