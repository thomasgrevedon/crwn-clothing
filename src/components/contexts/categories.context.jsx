import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../../shop-data";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories, setCategories };

  useEffect(() => {
    (async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    })();
  }, []);

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
