const Intern = require('../lib/Intern');

test('create an Intern object',() =>
{
    const intern = new Intern('raed',21,'raed@gmail.com','UOT');

    expect(intern.name).toBe('raed');
    expect(intern.id).toBe(21);
    expect(intern.email).toBe('raed@gmail.com');
    expect(intern.school).toBe('UOT');
});

test('get an Intern school',()=>
{
    const intern = new Intern('raed',21,'raed@gmail.com','UOT');

    expect(intern.getSchool()).toEqual('UOT');

});

test('get an Intern role',()=>
{
    const intern = new Intern('raed',21,'raed@gmail.com','UOT');

    expect(intern.getRole()).toEqual('Intern');

});