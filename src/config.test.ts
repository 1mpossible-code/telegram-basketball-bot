import Config from './Config';

it('should have variables from "process.env"', function () {
    process.env.variable = 'some var';
    expect(Config.get('variable')).toBe('some var');
});

it('should throw an error if nonExistingValue is requested', function () {
    const key = 'nonExistingValue';
    process.env[key] = '';
    expect(() => Config.get(key)).toThrowError(`${key} must be provided!`);
});
