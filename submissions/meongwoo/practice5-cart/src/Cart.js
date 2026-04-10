import { useState } from "react";

function ShoppingCart() {
  const products = [
    { id: 1, name: "노트북", price: 1000000 },
    { id: 2, name: "마우스", price: 30000 },
    { id: 3, name: "키보드", price: 50000 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>쇼핑 카트</h1>

      <h2>상품 목록</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "10px" }}>
            {product.name} - {product.price.toLocaleString()}원
            <button
              onClick={() => addToCart(product)}
              style={{ marginLeft: "10px" }}
            >
              추가
            </button>
          </li>
        ))}
      </ul>

      <h2>장바구니</h2>

      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} style={{ marginBottom: "10px" }}>
                {item.name} - {item.price.toLocaleString()}원 × {item.quantity}
                <button
                  onClick={() => increaseQuantity(item.id)}
                  style={{ marginLeft: "10px" }}
                >
                  +
                </button>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  style={{ marginLeft: "5px" }}
                >
                  -
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{ marginLeft: "5px" }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>

          <h3>총 금액: {totalPrice.toLocaleString()}원</h3>

          <button onClick={clearCart}>장바구니 비우기</button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;