import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Header } from "./components";
import { Content, Cart } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
