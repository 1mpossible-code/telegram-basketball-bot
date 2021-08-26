// Configure 'dotenv'
import * as dotenv from 'dotenv';

dotenv.config();

export default class Config {
  public static get(key: string): string | never {
    const envElement = process.env[key];
    if (!envElement) throw new Error(`${key} must be provided!`);
    return envElement;
  }
}
