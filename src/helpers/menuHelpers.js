export const buildCategoriesObj = (categoriesArr) => 
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

export const buildMenuItemsByCategory = (items, categories) => 
    items.reduce((acc, curr) => ({
        ...acc,
        [curr.category?.toLowerCase()]: {
          ...acc[curr.category.toLowerCase()], 
          items: [...acc[curr.category.toLowerCase()].items, curr]
        }
    }), categories)

export const buildMenuItemsById = (items) =>
    items.reduce((acc, curr) => ({
        ...acc,
        [curr.id]: curr
    }), {})