import { createSelector } from "reselect";

const rootCategoriesSelector = (state) => {
  return state.categories;
};

const categoriesSelector = createSelector([rootCategoriesSelector], (rootCategoriesSelector) => {
  return rootCategoriesSelector.categoriesArray;
});

export const getCategoriesMap = createSelector([categoriesSelector], (categoriesSelector) => {
  console.log(categoriesSelector);
  const categoryMap = categoriesSelector.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
});
