import { Router } from 'express';
import { getMenuData } from '../../controllers/menuController.js';

const menuRouter = Router();

menuRouter.get('/', (_req, res) => {
    getMenuData()
        .then(menuData => res.status(200).json(menuData))
})

export default menuRouter;