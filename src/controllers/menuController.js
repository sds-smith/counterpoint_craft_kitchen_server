import dotenv from 'dotenv';
dotenv.config();

import { 
    buildCategoriesObj, 
    buildMenuItemsByCategory, 
    buildMenuItemsById 
} from "../helpers/menuHelpers.js";

const MENU_API = process.env.MENU_DATA_API_BASE_URL;

export async function getMenuData() {
    const categoriesResponse = await fetch(`${MENU_API}/categories`);
    const categoriesData = await categoriesResponse.json();
    const categories = buildCategoriesObj(categoriesData);
    const itemsResponse = await fetch(`${MENU_API}/items`);
    const items = await itemsResponse.json();
    const menuItemsByCategory = buildMenuItemsByCategory(items, categories);
    const menuItemsById = buildMenuItemsById(items);
    return {menuItemsByCategory, menuItemsById};
}