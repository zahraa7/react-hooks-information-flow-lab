import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(`light`);

  return (
    <div className={`App ${darkMode}`}>
      <header>
        <h2>Shopster</h2>
        <Header onDarkModeClick={(e) => setDarkMode(e)} />
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;