const buildCategoriesObj = (categoriesArr) => 
    categoriesArr.reduce((acc, curr) => {
        if (!acc[curr.name.toLowerCase()]) {
            return {
              ...acc,
              [curr.name.toLowerCase()]: {
                ...curr,
                items: []
              }
            }
        } else {
            return acc
        }
    }, {})

const buildMenuItemsByCategory = (items, categories) => 
    items.reduce((acc, curr) => ({
        ...acc,
        [curr.category?.toLowerCase()]: {
          ...acc[curr.category.toLowerCase()], 
          items: [...acc[curr.category.toLowerCase()].items, curr]
        }
      }), categories)

const buildMenuItemsById = (items) =>
    items.reduce((acc, curr) => ({
        ...acc,
        [curr.id]: curr
      }), {})

export async function getMenuData() {
    const categoriesResponse = await fetch('http://localhost:3000/api/v1/categories')
    const categoriesData = await categoriesResponse.json();
    const categories = buildCategoriesObj(categoriesData);
    const itemsResponse = await fetch('http://localhost:3000/api/v1/items');
    const items = await itemsResponse.json();
    const menuItemsByCategory = buildMenuItemsByCategory(items, categories);
    const menuItemsById = buildMenuItemsById(items);
    return {menuItemsByCategory, menuItemsById};
}