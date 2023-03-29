import { Route, Routes } from "react-router-dom";
import "./App.styles.scss";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import CheckoutPage from "./components/checkout-page/checkout-page.component";
import { useEffect } from "react";
import { createUserDocumentFromAuth, getCategoriesAndDocuments, getCurrentUser, trackAuthStateChange } from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { checkUserAuthentication, setCurrentUser } from "./store/user/user.action";
import { fetchCategoryAsync, setCategoriesArray, startFetchingCategory } from "./store/categories/categories.actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserAuthentication());
  }, [dispatch]);

  useEffect(() => {
    (() => {
      dispatch(startFetchingCategory());
    })();
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<CheckoutPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
