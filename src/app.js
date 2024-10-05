// const path = require('path');
import express, { json } from 'express';
// const helmet = require('helmet');
// const cors = require('cors');

// const authRouter = require('./routes/auth/auth.router');
// const api = require('./routes/api');

const app = express();

// app.use(helmet({
//     contentSecurityPolicy: {
//         directives: {
//             "connect-src": ["'self'", "https://accounts.google.com"]       
//          }
//     }
// }));

// app.use(cors({
//     origin: "http://localhost:3000"
// }));
app.use(json());
// app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use('/auth', authRouter);
// app.use('/v1', api);
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

export default app