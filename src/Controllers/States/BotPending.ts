import {BotState} from './BotState';
import {Context} from 'telegraf';
import logger from '../../Util/logger';
import {BotController} from '../BotController';
import {BotEnter} from './BotEnter';

export class BotPending implements BotState {
    startCommandHandler(ctx: Context): void {
        ctx.reply('BotPending').catch((e) => logger.error(e));
        BotController.changeState(new BotEnter());
    }

    diceHandler(ctx: Context): void {
        logger.info("BotPending's 'diceHandler' is called");
    }

    commonMessageHandler(ctx: Context): void {
        logger.info('Message handler');
    }

    exitCommandHandler(ctx: Context): void {
        logger.info('Exit command handler');
    }
}
