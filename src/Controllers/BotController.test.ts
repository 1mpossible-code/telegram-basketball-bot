import {getTestContext} from '../Mocks/context';
import {BotController} from './BotController';
import {BotPending} from './States/BotPending';
import {BotState} from './States/BotState';

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
        const controller1: BotController = BotController.getInstance();
        const controller2: BotController = BotController.getInstance();
        expect(controller1).toEqual(controller2);
    });

    it('should change state correctly when necessary', () => {
        // Mock state
        const state: BotState = new BotPending(BotController.getInstance());
        state.startCommandHandler = jest.fn();

        // Change state to mocked one
        BotController.getInstance().changeState(state);
        BotController.startCommandHandler(ctx);

        expect(state.startCommandHandler).toBeCalledWith(ctx);
    });
});
