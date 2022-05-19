const Engineer = require('../lib/Engineer');

describe("Set github via constructor argument", () => {
    const testVal = 'bigbobby';
    const e = new Engineer('Bob', 2, 'bigbobby@mail.com', testVal);
    expect(e.github).toBe(testVal);
})