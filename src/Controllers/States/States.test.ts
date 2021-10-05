import {getTestContext} from '../../Mocks/context';
import {BotEnter} from './BotEnter';
import {BotController} from '../BotController';

jest.mock('winston');

const ctx = getTestContext();

beforeEach(() => {
    jest.resetModules();
    ctx.reply = jest.fn().mockResolvedValue(null);
});

afterEach(() => {
    jest.resetAllMocks();
});

describe('test BotEnter state', () => {
    it('should test startCommandHandler', () => {
        const state = new BotEnter(BotController.getInstance());
        state.startCommandHandler(ctx);
        expect(ctx.reply).toBeCalledWith('BotEnter');
    });
});
