import { Route, Routes } from "react-router-dom";
import "./App.styles.scss";
import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Shop from "./components/routes/shop/shop.component";
import CheckoutPage from "./components/checkout-page/checkout-page.component";
import { useEffect } from "react";
import { createUserDocumentFromAuth, trackAuthStateChange } from "./utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = trackAuthStateChange((user) => {
      if (user) {
        dispatch(setCurrentUser(user));
        createUserDocumentFromAuth(user);
      }
    });
    return unsubscribe;
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
