import express from 'express';
import morgan from 'morgan';
import { playlist } from './routes';

const app = express();

app.use(morgan('tiny'));

app.use('/playlist', playlist);

export default app;
