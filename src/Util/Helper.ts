import {Context} from 'telegraf';

export class Helper {
    static botTimeoutMessage(
        ctx: Context,
        message: string,
        timeout = 5000
    ): void {
        setTimeout(() => ctx.reply(message), timeout);
    }
}
