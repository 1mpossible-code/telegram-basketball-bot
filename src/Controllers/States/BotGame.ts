import {BotState} from './BotState';
import {Context} from 'telegraf';
import logger from '../../Util/logger';
import {BotController} from '../BotController';
import {BotPending} from './BotPending';

export class BotGame implements BotState {
    startCommandHandler(ctx: Context): void {
        ctx.reply('BotGame').catch((e) => logger.error(e));
        BotController.changeState(new BotPending());
    }
}
