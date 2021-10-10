import {getTestContext} from '../Mocks/context';
import {BotController} from './BotController';
import {BotPending} from './States/BotPending';
import {BotState} from './States/BotState';

jest.mock('winston');

const ctx = getTestContext();

beforeEach(() => {
    jest.resetModules();
    ctx.reply = jest.fn().mockResolvedValue(null);
});

afterEach(() => {
    jest.resetAllMocks();
});

it('should return the same instance when getInstance() is called', () => {
    const controller1: BotController = BotController.getInstance();
    const controller2: BotController = BotController.getInstance();
    expect(controller1).toEqual(controller2);
});

describe('test BotController', () => {
    const mockedState: BotState = new BotPending(BotController.getInstance());

    it('should change state correctly when necessary and test startCommandHandler method', () => {
        // Change state to mocked one
        mockedState.startCommandHandler = jest.fn();
        BotController.getInstance().changeState(mockedState);
        BotController.startCommandHandler(ctx);

        expect(mockedState.startCommandHandler).toBeCalledWith(ctx);
    });

    it('should call state diceHandler', () => {
        // Change state to mocked one
        mockedState.diceHandler = jest.fn();
        BotController.getInstance().changeState(mockedState);
        BotController.diceHandler(ctx);

        expect(mockedState.diceHandler).toBeCalledWith(ctx);
    });

    it('should call state commonMessageHandler', () => {
        // Change state to mocked one
        mockedState.commonMessageHandler = jest.fn();
        BotController.getInstance().changeState(mockedState);
        BotController.commonMessageHandler(ctx);

        expect(mockedState.commonMessageHandler).toBeCalledWith(ctx);
    });

    it('should call state exitCommandHandler', () => {
        // Change state to mocked one
        mockedState.exitCommandHandler = jest.fn();
        BotController.getInstance().changeState(mockedState);
        BotController.exitCommandHandler(ctx);

        expect(mockedState.exitCommandHandler).toBeCalledWith(ctx);
    });

    it('should call state callbackQueryHandler', () => {
        // Change state to mocked one
        mockedState.callbackQueryHandler = jest.fn();
        BotController.getInstance().changeState(mockedState);
        BotController.callbackQueryHandler(ctx);

        expect(mockedState.callbackQueryHandler).toBeCalledWith(ctx);
    });
});
