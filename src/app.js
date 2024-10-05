import dotenv from 'dotenv';
dotenv.config();

import express, { json } from 'express';
// const helmet = require('helmet');
import cors from 'cors'
import api from './routes/api/api.js';
import authRouter from './routes/auth/index.js'

const origin = process.env.ALLOW_ORIGIN;

const app = express();

// app.use(helmet({
//     contentSecurityPolicy: {
//         directives: {
//             "connect-src": ["'self'", "https://accounts.google.com"]       
//          }
//     }
// }));

app.use(cors({
    origin
}));
app.use(json());

app.use('/v1', api);
app.use('/auth', authRouter);

export default app;