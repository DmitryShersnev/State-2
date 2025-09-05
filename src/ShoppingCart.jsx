import { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const incrementCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const deleteCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id != id));
  };
  return (
    <>
      <h1>Корзина товаров</h1>

      {cart.map((item) => (
        <p>
          {item.title} (Кол-во: {item.count})
          <button onClick={() => incrementCount(item.id)}>+1</button>
          <button onClick={() => deleteCart(item.id)}>Удалить</button>
        </p>
      ))}

      <button onClick={() => setCart([])}>Очистить корзину</button>
    </>
  );
}

export default ShoppingCart;
