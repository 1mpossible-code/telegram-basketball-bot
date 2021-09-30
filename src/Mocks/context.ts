import {Context, Telegram} from 'telegraf';

export const getTestContext = (): Context => {
    const tg = new Telegram('123');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Context({message: {chat: 123}}, tg, {});
};
