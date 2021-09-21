import {Markup} from 'telegraf';
import {InlineKeyboardMarkup} from 'telegraf/typings/core/types/typegram';

export class PendingService {
    public static getStartCommandMarkup(): Markup.Markup<InlineKeyboardMarkup> {
        // Inline keyboard markup, that shows
        // itself when enter 'basketball' scene
        return Markup.inlineKeyboard([
            Markup.button.callback('Join', 'join'),
            Markup.button.callback('Start', 'start'),
        ]);
    }
}
