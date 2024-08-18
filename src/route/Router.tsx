import { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import MainLayout from "layouts/MainLayout";
import NotFound from "pages/NotFound";
import Product from "pages/Single_Product";
import ShoppingCart from "pages/ShoppingCart";
import Checkout from "pages/Checkout";

const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("pages/About"));
const Contact = lazy(() => import("pages/ContactUs"));

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <Product />
              </Suspense>
            }
          />
          <Route
            path="/shoppingcart"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <ShoppingCart />
              </Suspense>
            }
          />
          <Route
            path="/checkout"
            element={
              <Suspense fallback={<h1>loading...</h1>}>
                <Checkout />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
