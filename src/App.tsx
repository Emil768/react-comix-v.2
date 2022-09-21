import { Route, Routes } from "react-router-dom";

import styles from "./App.module.scss";
import { Header } from "./components";
import { Content, Cart } from "./pages";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
