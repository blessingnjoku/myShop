import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar  />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id" children={<SingleProduct />} />
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="#" exact>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
