import {Context} from 'telegraf';
import {BotState} from './States/BotState';
import {BotPending} from './States/BotPending';
import {BotEnter} from './States/BotEnter';
import {BotGame} from './States/BotGame';

export class BotController {
    private state: BotState;
    private static instance: BotController;

    public pendingState: BotState;
    public enterState: BotState;
    public gameState: BotState;

    private constructor() {
        this.pendingState = new BotPending(this);
        this.enterState = new BotEnter(this);
        this.gameState = new BotGame(this);

        this.state = this.pendingState;
    }

    public static getInstance(): BotController {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }

    public static startCommandHandler(ctx: Context): void {
        BotController.getState().startCommandHandler(ctx);
    }

    public static diceHandler(ctx: Context): void {
        BotController.getState().diceHandler(ctx);
    }

    public static commonMessageHandler(ctx: Context): void {
        BotController.getState().commonMessageHandler(ctx);
    }

    public static exitCommandHandler(ctx: Context): void {
        BotController.getState().exitCommandHandler(ctx);
    }

    public static callbackQueryHandler(ctx: Context): void {
        BotController.getState().callbackQueryHandler(ctx);
    }

    private static getState(): BotState {
        return BotController.getInstance().state;
    }

    public changeState(state: BotState): void {
        this.state = state;
    }
}
