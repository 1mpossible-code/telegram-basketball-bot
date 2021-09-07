import {Composer} from 'telegraf';
import {BotController} from '../Controllers/BotController';

const composer = new Composer();

// Handling '/start' command
composer.start(BotController.startCommandHandler);
// Handling dice
composer.on('dice', BotController.diceHandler);

export default composer;
