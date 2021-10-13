interface IWinstonMock {
    format: {
        combine(): void;
        timestamp(): void;
        printf(): void;
        simple(): void;
    };

    transports: {
        Console(): void;
        File(): void;
    };

    createLogger(): {
        info(): void;
        error(): void;
    };
}

const winston: IWinstonMock = jest.createMockFromModule('winston');

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
    debug: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
};

winston.format = mFormat;
winston.transports = mTransports;
winston.createLogger = jest.fn(() => mLogger);

export default winston;
