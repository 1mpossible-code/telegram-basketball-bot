import {Context} from 'telegraf';
import {BotState} from './States/BotState';
import {BotPending} from './States/BotPending';

export class BotController {
    public state: BotState;
    public static instance: BotController;

    constructor() {
        this.state = new BotPending();
    }

    public static getInstance(): BotController {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }

    public static startCommandHandler(ctx: Context): void {
        BotController.getInstance().state.startCommandHandler(ctx);
    }

    public static changeState(state: BotState): void {
        BotController.getInstance().state = state;
    }
}
