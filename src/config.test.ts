import Config from './Config';

it('should have BOT_TOKEN', function () {
    expect(Config.get('BOT_TOKEN')).toBeTruthy();
});

it('should have DB_URI', function () {
    expect(Config.get('DB_URI')).toBeTruthy();
});

it('should throw an error if nonExistingValue is requested', function () {
    const key = 'nonExistingValue';
    expect(() => Config.get(key)).toThrowError(`${key} must be provided!`);
});
