import React from 'react';
import './App.css';

import TextCounter from "./components/text_counter";
import TextReverse from "./components/text_reverse";
import AlphabeticOrder from "./components/alphabetic_order";
import TextUpperLower from "./components/text_upperlower";

function App() {
  return (
    <div className="App">
        <TextUpperLower></TextUpperLower>
    </div>
  );
}

export default App;
