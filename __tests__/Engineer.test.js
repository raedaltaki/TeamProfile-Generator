const Engineer = require('../lib/Engineer');

test('create an Engineer object',() =>
{
    const engineer = new Engineer('raed',21,'raed@gmail.com','raedaltaki');

    expect(engineer.name).toBe('raed');
    expect(engineer.id).toBe(21);
    expect(engineer.email).toBe('raed@gmail.com');
    expect(engineer.github).toBe('raedaltaki');
});

test('get an Engineer github',()=>
{
    const engineer = new Engineer('raed',21,'raed@gmail.com','raedaltaki');

    expect(engineer.getGithub()).toEqual('raedaltaki');

});

test('get an Engineer role',()=>
{
    const engineer = new Engineer('raed',21,'raed@gmail.com','raedaltaki');

    expect(engineer.getRole()).toEqual('Engineer');

});