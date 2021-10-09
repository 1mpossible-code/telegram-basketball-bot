import {getTestContext} from '../../Mocks/context';
import {BotController} from '../BotController';
import logger from '../../Util/logger';
import {BotGame} from './BotGame';

jest.mock('winston');

const ctx = getTestContext();

beforeEach(() => {
    jest.resetModules();
    ctx.reply = jest.fn().mockResolvedValue(null);
});

afterEach(() => {
    jest.resetAllMocks();
});

describe('test BotGame state', () => {
    const state = new BotGame(BotController.getInstance());

    it('should test startCommandHandler method', () => {
        state.startCommandHandler(ctx);
        expect(ctx.reply).toBeCalledWith('BotGame');
    });

    it('should not throw error when startCommandHandler is called', () => {
        ctx.reply = jest.fn().mockRejectedValueOnce(Error);
        state.startCommandHandler(ctx);

        expect(ctx.reply).not.toThrow(Error);
    });

    it('should test diceHandler method', () => {
        state.diceHandler(ctx);
        expect(logger.info).toBeCalledWith("BotGame's 'diceHandler' is called");
    });

    it('should test commonMessageHandler method', () => {
        state.commonMessageHandler(ctx);
        expect(logger.info).toBeCalledWith('Message handler');
    });

    it('should test exitCommandHandler method', () => {
        state.exitCommandHandler(ctx);
        expect(logger.info).toBeCalledWith('Exit command handler');
    });

    it('should test callbackQueryHandler method', () => {
        state.callbackQueryHandler(ctx);
        expect(logger.info).toBeCalledWith('Callback query handler');
    });
});
