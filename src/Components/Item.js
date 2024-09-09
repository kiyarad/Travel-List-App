function Item({ itemObj, onRemoveItem, onPackItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onPackItem(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onRemoveItem(itemObj.id)}>🅧</button>
    </li>
  );
}

export default Item;
