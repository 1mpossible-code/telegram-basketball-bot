import {BotState} from './BotState';
import {Context} from 'telegraf';
import logger from '../../Util/logger';
import {BotController} from '../BotController';
import {BotGame} from './BotGame';

export class BotEnter implements BotState {
    startCommandHandler(ctx: Context): void {
        ctx.reply('BotEnter').catch((e) => logger.error(e));
        BotController.changeState(new BotGame());
    }

    diceHandler(ctx: Context): void {
        logger.info("BotEnter's 'diceHandler' is called");
    }

    commonMessageHandler(ctx: Context): void {
        logger.info('Message handler');
    }

    exitCommandHandler(ctx: Context): void {
        logger.info('Exit command handler');
    }
}
