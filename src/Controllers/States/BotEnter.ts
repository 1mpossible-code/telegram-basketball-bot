import {BotState} from './BotState';
import {Context} from 'telegraf';
import logger from '../../Util/logger';
import {BotController} from '../BotController';
import {BotPending} from './BotPending';

export class BotEnter implements BotState {
    readonly _controller: BotController;

    constructor(controller: BotController) {
        this._controller = controller;
    }

    startCommandHandler(ctx: Context): void {
        ctx.reply('BotEnter').catch((e) => logger.error(e));
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

    callbackQueryHandler(ctx: Context): void {
        logger.info('Callback query handler');
    }
}
