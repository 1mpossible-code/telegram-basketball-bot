import {Composer} from 'telegraf';
import {BotController} from '../Controllers/BotController';

const composer = new Composer();

// Handling '/start' command
composer.start(BotController.startCommandHandler);
// Handling '/exit' command
composer.command('exit', BotController.exitCommandHandler);
// Handling dice
composer.on('dice', BotController.diceHandler);
// Handling common messages
composer.on('message', BotController.commonMessageHandler);
composer.on('callback_query', BotController.callbackQueryHandler);

export default composer;
