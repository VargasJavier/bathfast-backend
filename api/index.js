import express from 'express';
import cors from 'cors';
import bathRouter from './router/bath.router.js';

import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js';

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = [
    'http://localhost:8080',
    'http://localhost:4200'
];
const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('No permitido'))
        }
    }
}
app.use(cors(options));

app.use('/api/v1', bathRouter);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log('Mi port' +  port);
  });