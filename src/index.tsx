import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layouts/Main.css";
import "./pages/Home/home.css";
import "./pages/Footer/footer.css";
import "./pages/About/Aboutt.css";
import "./pages/ContactUs/Contact.css";
import "./pages/Single_Product/product.css";
import "./pages/ShoppingCart/shoppingCart.css";
import "./pages/Checkout/Checkout.css";
import "./pages/ProductCart/ProductCartHome.css";
import "./pages/grid.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./reduxx/store";
// eslint-disable-next-line import/no-extraneous-dependencies
// import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
