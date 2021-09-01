import {BotState} from './BotState';
import {Context} from 'telegraf';
import logger from '../../Util/logger';

export class BotEnter implements BotState {
    startCommandHandler(ctx: Context): void {
        ctx.reply('Hello!').catch((e) => logger.error(e));
    }
}
