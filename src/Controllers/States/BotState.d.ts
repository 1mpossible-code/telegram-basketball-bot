import {Context} from 'telegraf';

export interface BotState {
    startCommandHandler(ctx: Context): void;
}