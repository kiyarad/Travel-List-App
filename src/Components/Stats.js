function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some item to your packing list 🚀</em>
      </p>
    );

  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Yoy got everthing! Ready to go ✈️"
          : `💼 You have ${numItem} items on your list, and your already packed ${numPacked}
           (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
