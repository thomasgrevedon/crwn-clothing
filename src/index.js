import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import { UserProvider } from "./components/contexts/user.context";
import { ProductsProvider } from "./components/contexts/products.context";
import { CartToggleProvider } from "./components/contexts/cart-toggle.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <ProductsProvider>
          <CartToggleProvider>
            <App />
          </CartToggleProvider>
        </ProductsProvider>
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
