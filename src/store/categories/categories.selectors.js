import { createSelector } from "reselect";

const rootCategoriesSelector = (state) => {
  console.log("selector 1");
  return state.categories;
};

const categoriesSelector = createSelector([rootCategoriesSelector], (rootCategoriesSelector) => {
  console.log("selector 2");
  return rootCategoriesSelector.categoriesArray;
});

export const getCategoriesMap = createSelector([categoriesSelector], (categoriesSelector) => {
  console.log("selector 3");
  console.log(categoriesSelector);
  const categoryMap = categoriesSelector.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
});
