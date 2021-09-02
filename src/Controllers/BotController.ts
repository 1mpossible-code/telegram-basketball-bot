import {Context} from 'telegraf';
import {BotEnter} from './States/BotEnter';
import {BotState} from './States/BotState';

export class BotController {
    public state: BotState;
    public static instance: BotController;

    constructor() {
        this.state = new BotEnter();
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
