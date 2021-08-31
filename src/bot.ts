import logger from './Util/logger';
import Config from './Config';
import {Telegraf} from 'telegraf';
import mongoose from 'mongoose';
import {BotController} from './Controllers/BotController';

// Create bot instance
const bot = new Telegraf(Config.get('BOT_TOKEN'));

bot.start(BotController.startCommandHandler);

mongoose
    .connect(Config.get('DB_URI'))
    .then(() => logger.info('Database Connected'))
    .catch((err) => logger.error(err));

// Launch bot
bot.launch().then(() => logger.info('Bot is ONLINE'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
