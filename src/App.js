import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import "./App.css";
//import './App.css'
function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
