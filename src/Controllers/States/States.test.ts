import {getTestContext} from '../../Mocks/context';

jest.mock('winston');

describe('test states', () => {
    const ctx = getTestContext();

    beforeEach(() => {
        jest.resetModules();
        ctx.reply = jest.fn().mockResolvedValue(null);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should be example test case', () => {
        const test = null;
        expect(test).toBeNull();
    });
});
