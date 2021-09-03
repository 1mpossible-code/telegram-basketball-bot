import {BotController} from './BotController';
import {Context, Telegram} from 'telegraf';

describe('test BotController', () => {
    const tg = new Telegram('123');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ctx = new Context({message: {chat: 123}}, tg, {});

    it('should call ctx reply and change states', () => {
        ctx.reply = jest.fn().mockResolvedValue(null);
        // After each call the Pending state will be changed into Enter one
        // so we need to test each situation
        BotController.startCommandHandler(ctx);
        expect(ctx.reply).toHaveBeenCalledWith('BotPending');
        BotController.startCommandHandler(ctx);
        expect(ctx.reply).toHaveBeenCalledWith('BotEnter');
    });

    it('should not throw an error', () => {
        ctx.reply = jest.fn().mockRejectedValue('error');
        // After each call the Pending state will be changed into Enter one
        expect(() => BotController.startCommandHandler(ctx)).not.toThrowError();
        expect(() => BotController.startCommandHandler(ctx)).not.toThrowError();
    });
});
