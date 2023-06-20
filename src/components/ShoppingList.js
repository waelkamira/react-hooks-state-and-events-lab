import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  let [selectedCatagory, setCatagory] = useState("All");
  // function handleSelectedCatagory(e) {
  //   setCatagory(e.target.value);
  // }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          name="filter"
          value={selectedCatagory}
          onChange={(e) => setCatagory(e.target.value)}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
