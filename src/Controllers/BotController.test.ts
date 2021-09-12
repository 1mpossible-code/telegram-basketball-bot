import {BotController} from './BotController';
import {Context, Telegram} from 'telegraf';
import {BotPending} from './States/BotPending';
import {BotEnter} from './States/BotEnter';
import {BotGame} from './States/BotGame';
import logger from '../Util/logger';

jest.mock('winston', () => {
    const mFormat = {
        combine: jest.fn(),
        timestamp: jest.fn(),
        printf: jest.fn(),
        simple: jest.fn(),
    };
    const mTransports = {
        Console: jest.fn(),
        File: jest.fn(),
    };
    const mLogger = {
        info: jest.fn(),
        error: jest.fn(),
    };
    return {
        format: mFormat,
        transports: mTransports,
        createLogger: jest.fn(() => mLogger),
    };
});

describe('test BotController', () => {
    const tg = new Telegram('123');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ctx = new Context({message: {chat: 123}}, tg, {});

    beforeEach(() => {
        jest.resetModules();
        ctx.reply = jest.fn().mockResolvedValue(null);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should call ctx reply and change states when start is called', () => {
        // After each call the state will be changed,
        // so we need to test each situation
        BotController.startCommandHandler(ctx);
        expect(ctx.reply).toHaveBeenCalledWith('BotPending');
        BotController.startCommandHandler(ctx);
        expect(ctx.reply).toHaveBeenCalledWith('BotEnter');
        BotController.startCommandHandler(ctx);
        expect(ctx.reply).toHaveBeenCalledWith('BotGame');
    });

    it('should not throw an error in start command', () => {
        ctx.reply = jest.fn().mockRejectedValue('error');
        // After each call the Pending state will be changed into Enter one
        expect(() => BotController.startCommandHandler(ctx)).not.toThrowError();
        expect(() => BotController.startCommandHandler(ctx)).not.toThrowError();
        expect(() => BotController.startCommandHandler(ctx)).not.toThrowError();
    });

    it('should call ctx reply when dice handler is called', () => {
        // After each call the state will be changed,
        // so we need to test each situation
        BotController.changeState(new BotPending());
        BotController.diceHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith(
            "BotPending's 'diceHandler' is called"
        );

        BotController.changeState(new BotEnter());
        BotController.diceHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith(
            "BotEnter's 'diceHandler' is called"
        );

        BotController.changeState(new BotGame());
        BotController.diceHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith(
            "BotGame's 'diceHandler' is called"
        );
    });

    it('should call logger when common message handler is called', () => {
        BotController.changeState(new BotPending());
        BotController.commonMessageHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith('Message handler');

        BotController.changeState(new BotEnter());
        BotController.commonMessageHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith('Message handler');

        BotController.changeState(new BotGame());
        BotController.commonMessageHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith('Message handler');
    });

    it("should call logger when 'exit' command is called", () => {
        BotController.changeState(new BotPending());
        BotController.exitCommandHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith('Exit command handler');

        BotController.changeState(new BotEnter());
        BotController.exitCommandHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith('Exit command handler');

        BotController.changeState(new BotGame());
        BotController.exitCommandHandler(ctx);
        expect(logger.info).toHaveBeenCalledWith('Exit command handler');
    });
});
