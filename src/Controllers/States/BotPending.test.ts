import {getTestContext} from '../../Mocks/context';
import {BotController} from '../BotController';
import logger from '../../Util/logger';
import {BotPending} from './BotPending';
import {PendingService} from '../../Services/PendingService';

jest.mock('winston');

const ctx = getTestContext();

beforeEach(() => {
    jest.resetModules();
    ctx.reply = jest.fn().mockResolvedValue(null);
});

afterEach(() => {
    jest.resetAllMocks();
});

describe('test BotPending state', () => {
    const state = new BotPending(BotController.getInstance());

    it('should test startCommandHandler method', () => {
        state.startCommandHandler(ctx);
        const markup = PendingService.getStartCommandMarkup();

        expect(ctx.reply).toBeCalledWith(
            'If you want to play, just click "Join" button',
            markup
        );
    });

    it('should not throw error when startCommandHandler is called', () => {
        ctx.reply = jest.fn().mockRejectedValueOnce(Error);
        state.startCommandHandler(ctx);

        expect(ctx.reply).not.toThrow(Error);
    });

    it('should test diceHandler method', () => {
        state.diceHandler(ctx);
        expect(logger.info).toBeCalledWith(
            "BotPending's 'diceHandler' is called"
        );
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
