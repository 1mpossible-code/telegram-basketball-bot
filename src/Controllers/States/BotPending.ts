import {BotState} from './BotState';
import {Context} from 'telegraf';
import logger from '../../Util/logger';
import {BotController} from '../BotController';
import {BotEnter} from './BotEnter';
import {PendingService} from '../../Services/PendingService';

export class BotPending implements BotState {
    readonly _controller: BotController;

    constructor(controller: BotController) {
        this._controller = controller;
    }

    startCommandHandler(ctx: Context): void {
        ctx.reply(
            'If you want to play, just click "Join" button',
            PendingService.getStartCommandMarkup()
        ).catch((e) => logger.error(e));
        this._controller.changeState(this._controller.enterState);
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

    callbackQueryHandler(ctx: Context): void {
        logger.info('Callback query handler');
    }
}
