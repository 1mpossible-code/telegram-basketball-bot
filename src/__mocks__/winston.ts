const winston = jest.createMockFromModule('winston');

const mFormat = {
    combine: jest.fn(),
    timestamp: jest.fn(),
    printf: jest.fn(),
    simple: jest.fn(),
};
const mTransports = {
    Console: jest.fn(),
    File: jest.fn(),
};
const mLogger = {
    info: jest.fn(),
    error: jest.fn(),
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
winston.format = mFormat;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
winston.transports = mTransports;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
winston.createLogger = jest.fn(() => mLogger);

export default winston;
