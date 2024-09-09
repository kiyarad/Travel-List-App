import { useState } from "react";
import Item from "./Item";

function PackingList({
  items,
  handleRemoveItem,
  handlePackItem,
  handleResetItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;

  if (sortBy === "input") sortedItem = items;

  if (sortBy === "description")
    sortedItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            itemObj={item}
            key={item.id}
            onRemoveItem={handleRemoveItem}
            onPackItem={handlePackItem}
            onResetItem={handleResetItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Descritpion</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={handleResetItems}>CLEAR LIST</button>
      </div>
    </div>
  );
}

export default PackingList;
