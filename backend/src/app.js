import express from 'express';
import morgan from 'morgan';
import { api } from './routes';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use(morgan('tiny'));

app.use('/api', api);

app.use(errorHandler);

export default app;
