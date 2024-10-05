import { Router } from 'express';
import menuRouter from './menu.js';

const api = Router();

api.use('/menu', menuRouter)

export default api;