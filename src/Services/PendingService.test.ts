import {PendingService} from './PendingService';
import {Markup} from 'telegraf';

describe('test Pending service', () => {
    it('should return inline markup when the method is called', () => {
        const markup = PendingService.getStartCommandMarkup();
        expect(markup).toBeInstanceOf(Markup.Markup);
    });
});
