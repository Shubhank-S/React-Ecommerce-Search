import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Recommended from "./components/Recommended/Recommended";

function App() {
  return (
    <div>
      <Navbar />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
