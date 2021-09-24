import {Context} from 'telegraf';
import {BotController} from '../BotController';

export interface BotState {
    readonly _controller: BotController;

    startCommandHandler(ctx: Context): void;

    diceHandler(ctx: Context): void;

    commonMessageHandler(ctx: Context): void;

    exitCommandHandler(ctx: Context): void;

    callbackQueryHandler(ctx: Context): void;
}
