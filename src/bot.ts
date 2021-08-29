import logger from './Util/logger';
import Config from './Config';
import {Telegraf} from 'telegraf';

// Create bot instance
const bot = new Telegraf(Config.get('BOT_TOKEN'));

bot.start((ctx) => ctx.reply('Hello!'));

// Launch bot
bot.launch().then(() => logger.info('Bot is ONLINE'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
