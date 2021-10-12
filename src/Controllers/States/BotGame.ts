import {BotState} from './BotState';
import {Context} from 'telegraf';
import logger from '../../Util/logger';
import {BotController} from '../BotController';
import {BotPending} from './BotPending';

export class BotGame implements BotState {
    readonly _controller: BotController;

    constructor(controller: BotController) {
        this._controller = controller;
    }

    startCommandHandler(ctx: Context): void {
        ctx.reply('BotGame').catch((e) => logger.error(e));
    }

    diceHandler(ctx: Context): void {
        logger.info("BotGame's 'diceHandler' is called");
    }

    commonMessageHandler(ctx: Context): void {
        logger.info('Message handler');
    }

    exitCommandHandler(ctx: Context): void {
        logger.debug('Called "exitCommandHandler" method in BotGame file');
        this._controller.changeState(this._controller.pendingState);
    }

    callbackQueryHandler(ctx: Context): void {
        logger.info('Callback query handler');
    }
}
