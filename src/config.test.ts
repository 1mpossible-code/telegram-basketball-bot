import {config, validate} from './config';

it('should have token', function () {
  expect(config.token).toBeTruthy();
});

it('should have dbURI', function () {
  expect(config.dbURI).toBeTruthy();
});

it('should not throw an error', function () {
  expect(() => validate(config)).not.toThrowError();
});

it('should throw an error without token', function () {
  const configCopy = {...config, token: undefined};
  const errMsg = 'token must be provided!';
  expect(() => validate(configCopy)).toThrowError(errMsg);
});
