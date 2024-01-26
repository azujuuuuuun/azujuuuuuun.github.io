import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.simple(),
  ),
  transports: [new winston.transports.Console()],
});
