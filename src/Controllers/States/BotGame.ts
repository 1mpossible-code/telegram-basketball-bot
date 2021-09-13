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

    diceHandler(ctx: Context): void {
        logger.info("BotGame's 'diceHandler' is called");
    }

    commonMessageHandler(ctx: Context): void {
        logger.info('Message handler');
    }

    exitCommandHandler(ctx: Context): void {
        logger.info('Exit command handler');
    }

    callbackQueryHandler(ctx: Context): void {
        logger.info('Callback query handler');
    }
}
