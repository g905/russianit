import React from "react";
//import AddTodo from "../containers/AddTodo";
import VisibleElementsList from "../containers/VisibleElementsList";
import Footer from "./Footer";
import Header from "./Header";
import Car from "./Car/Car";
import Zoom from "./Zoom";

const App = () => (
  <div>
    <Header />
    <div class="content">
      <Zoom />
      <Car />
      <VisibleElementsList />
    </div>
    <Footer />
  </div>
);

export default App;
