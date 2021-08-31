import {Context} from 'telegraf';
import logger from '../Util/logger';

export class BotController {
    static startCommandHandler(ctx: Context): void {
        ctx.reply('Hello!').catch((e) => logger.error(e));
    }
}
