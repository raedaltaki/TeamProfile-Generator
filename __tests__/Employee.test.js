const Employee = require('../lib/Employee');

test('creates an Employee object',()=>
{
    const employee = new Employee('raed',12,'raed@gmail.com');

    expect(employee.name).toBe('raed');
    expect(employee.id).toBe(12);
    expect(employee.email).toBe('raed@gmail.com');
});

test('get an Employee name',()=>
{
    const employee = new Employee('raed',12,'raed@gmail.com');

    expect(employee.getName()).toEqual(employee.name);

});

test('get an Employee ID',()=>
{
    const employee = new Employee('raed',12,'raed@gmail.com');

    expect(employee.getId()).toEqual(employee.id);

});

test('get an Employee email',()=>
{
    const employee = new Employee('raed',12,'raed@gmail.com');

    expect(employee.getEmail()).toEqual(employee.email);

});

test('get an Employee role',()=>
{
    const employee = new Employee('raed',12,'raed@gmail.com');

    expect(employee.getRole()).toEqual('Employee');

});