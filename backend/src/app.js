import express from 'express';
import morgan from 'morgan';
import { playlist } from './routes';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use(morgan('tiny'));

app.use('/playlist', playlist);

app.use(errorHandler);

export default app;
