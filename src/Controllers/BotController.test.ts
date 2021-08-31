import {BotController} from './BotController';
import {Context, Telegram} from 'telegraf';

describe('test BotController', () => {
    const tg = new Telegram('123');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const ctx = new Context({message: {chat: 123}}, tg, {});

    it('should call ctx reply', () => {
        ctx.reply = jest.fn().mockResolvedValue(null);
        BotController.startCommandHandler(ctx);
        expect(ctx.reply).toHaveBeenCalledWith('Hello!');
    });

    it('should throw an error', () => {
        ctx.reply = jest.fn().mockRejectedValue('error');
        expect(() => BotController.startCommandHandler(ctx)).not.toThrowError();
    });
});
