import React from "react";
//import AddTodo from "../containers/AddTodo";
import VisibleElementsList from "../containers/VisibleElementsList";
import Footer from "./Footer";
import Car from "./Car/Car";

const App = () => (
  <div>
    <Car />
    <VisibleElementsList />
    <Footer />
  </div>
);

export default App;
