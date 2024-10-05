import fs from 'fs';
// const https = require('https');
import { createServer } from 'http';
import dotenv from 'dotenv'
dotenv.config();

import app from './app.js';

const PORT = process.env.PORT || 80;

// const server = https.createServer({
//     key: fs.readFileSync('key.pem'),
//     cert: fs.readFileSync('cert.pem')
// },app);

const server = createServer(app);

async function startServer() {
    
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    });
};

startServer();