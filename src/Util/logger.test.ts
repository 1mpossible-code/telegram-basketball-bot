jest.unmock('winston');

beforeEach(() => {
    jest.resetModules();
});

it('should has level "debug" with "debug" NODE_ENV', async function () {
    process.env.NODE_ENV = 'debug';
    const logger = await import('./logger');
    expect(logger.default.level).toBe('debug');
});

it('should has "level" info with "production" NODE_ENV', async function () {
    process.env.NODE_ENV = 'production';
    const logger = await import('./logger');
    expect(logger.default.level).toBe('info');
});
