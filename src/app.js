import express from 'express';
import logger from './config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  morgan('combined', { stream: { write: (msg) => logger.info(msg.trim()) } })
);

app.get('/', (req, res) => {
  logger.info('Root endpoint accessed');
  res.status(200).send('Welcome to DevOps API!');
});

export default app;
