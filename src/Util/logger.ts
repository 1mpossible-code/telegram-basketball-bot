import winston from 'winston';
import Config from '../Config';

const logger = winston.createLogger({
    level: Config.get('NODE_ENV') === 'production' ? 'info' : 'debug',
    transports: [
        new winston.transports.Console({format: winston.format.simple()}),
    ],
});

export default logger;
