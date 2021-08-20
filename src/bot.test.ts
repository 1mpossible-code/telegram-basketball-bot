import bot from './bot';

test('hello world', () => {
  expect(bot()).toBe('Hello World!');
});
