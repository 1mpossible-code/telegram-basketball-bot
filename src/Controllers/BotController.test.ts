import {Context, Telegram} from 'telegraf';

jest.mock('winston');

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
});
