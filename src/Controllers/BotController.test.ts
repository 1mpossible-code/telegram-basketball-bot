import {getTestContext} from '../mocks/context';

jest.mock('winston');

describe('test BotController', () => {
    const ctx = getTestContext();

    beforeEach(() => {
        jest.resetModules();
        ctx.reply = jest.fn().mockResolvedValue(null);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });
});
