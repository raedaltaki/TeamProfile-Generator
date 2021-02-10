const Manager = require('../lib/Manager');

test('create a Manager object',() =>
{
    const manager = new Manager('raed',21,'raed@gmail.com',66);

    expect(manager.name).toBe('raed');
    expect(manager.id).toBe(21);
    expect(manager.email).toBe('raed@gmail.com');
    expect(manager.officeNumber).toBe(66);
});

test('get a Manager role',()=>
{
    const manager = new Manager('raed',21,'raed@gmail.com', 50);

    expect(manager.getRole()).toEqual('Manager');

});