import {Context} from 'telegraf';

export interface BotState {
    startCommandHandler(ctx: Context): void;

    diceHandler(ctx: Context): void;

    commonMessageHandler(ctx: Context): void;

    exitCommandHandler(ctx: Context): void;

    callbackQueryHandler(ctx: Context): void;
}
