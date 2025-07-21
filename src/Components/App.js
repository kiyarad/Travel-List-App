// import { useState } from "react";
// import Logo from "./Logo";
// import Form from "./Form";
// import PackingList from "./PackingList";
// import Stats from "./Stats";

// export default function App() {
//   const [items, setItems] = useState([]);

//   function handleAddItem(item) {
//     setItems((items) => [...items, item]);
//   }

//   function handleRemoveItem(id) {
//     setItems(items.filter((item) => item.id !== id));
//   }

//   function handlePackItem(id) {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, packed: !item.packed } : item
//       )
//     );
//   }

//   function handleResetItems() {
//     if (items.length) {
//       const confirmed = window.confirm(
//         "Are You Sure You Want to Delete All Items?"
//       );
//       if (confirmed) {
//         setItems([]);
//       }
//     }
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItem={handleAddItem} />
//       <PackingList
//         items={items}
//         handleRemoveItem={handleRemoveItem}
//         handlePackItem={handlePackItem}
//         handleResetItems={handleResetItems}
//       />
//       <Stats items={items} />
//     </div>
//   );
// }






import { useState, useEffect } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // بارگذاری داده‌ها از localStorage در ابتدای بارگذاری کامپوننت
    const savedItems = JSON.parse(localStorage.getItem("packingListItems")) || [];
    setItems(savedItems);
  }, []);

  useEffect(() => {
    // ذخیره داده‌ها در localStorage هنگام تغییر آنها
    localStorage.setItem("packingListItems", JSON.stringify(items));
  }, [items]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handlePackItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleResetItems() {
    if (items.length) {
      const confirmed = window.confirm(
        "Are You Sure You Want to Delete All Items?"
      );
      if (confirmed) {
        setItems([]);
      }
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleRemoveItem={handleRemoveItem}
        handlePackItem={handlePackItem}
        handleResetItems={handleResetItems}
      />
      <Stats items={items} />
    </div>
  );
}
