import React, { useState } from "react";
import "./DynamicListManager.css";

export default function DynamicListManager() {
  const [items, setItems] = useState(["First Item"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Dynamic List Manager</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter an item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <div className="list-box">
          <ul>
            {items.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
