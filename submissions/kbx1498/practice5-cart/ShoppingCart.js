import React, { useState } from 'react';

const products = [
  { id: 1, name: '노트북', price: 1000000 },
  { id: 2, name: '마우스', price: 30000 },
  { id: 3, name: '키보드', price: 50000 },
  { id: 4, name: '정양효의 아크테릭스', price: 900000 },
  { id: 5, name: '오늘먹은 돈까스', price: 9500 }
];

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>상품 목록</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price.toLocaleString()}원
            <button onClick={() => addToCart(product)}>추가</button>
          </li>
        ))}
      </ul>

      <hr />

      <h1>장바구니</h1>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} ({item.price.toLocaleString()}원) x {item.quantity}
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>삭제</button>
              </li>
            ))}
          </ul>
          <h3>총 금액: {totalPrice.toLocaleString()}원</h3>
          <button onClick={clearCart}>장바구니 비우기</button>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;