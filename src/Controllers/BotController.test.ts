import {getTestContext} from '../mocks/context';
import {BotController} from './BotController';

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

    it('should return the same instance when getInstance() is called', () => {
        const controller1 = BotController.getInstance();
        const controller2 = BotController.getInstance();
        expect(controller1).toEqual(controller2);
    });
});
