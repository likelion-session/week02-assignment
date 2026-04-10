import { useState } from 'react';

const products = [
  { id: 1, name: '노트북', price: 1000000 },
  { id: 2, name: '마우스', price: 30000 },
  { id: 3, name: '키보드', price: 50000 },
];

// 가격을 한국 원화 형식으로 ,붙여서 표시
function formatPrice(value) {
  return value.toLocaleString('ko-KR');
}

// 쇼핑 카트 컴포넌트
function ShoppingCart() {
  const [cart, setCart] = useState([]); // 장바구니 배열 (id, 이름, 가격, 수량)

  const addToCart = (product) => { 
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // 수량 증가
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // 수량 감소 (0되면 제거)
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 삭제
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 장바구니 비우기
  const clearCart = () => {
    setCart([]);
  };

  // 총 금액
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  // 장바구니에 담긴 수량
  const quantityById = cart.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {});

  return (
    <main className="shopping-cart-page">
      <h1>쇼핑 카트</h1>
      <div className="shopping-cart-layout">   
        <section className="panel">
          <h2>상품 목록</h2>
          <ul className="list">
            {products.map((product) => (
              <li key={product.id} className="list-item">
                <div>
                  <strong>{product.name}</strong>
                  <p>{formatPrice(product.price)}원</p>
                  <small>장바구니 수량: {quantityById[product.id] || 0}</small>
                </div>
                <button
                  type="button"
                  className="button primary"
                  onClick={() => addToCart(product)}
                >
                  추가
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>장바구니</h2>

          {cart.length === 0 ? (
            <p className="empty-message">장바구니가 비어 있습니다.</p>
          ) : (
            <ul className="list">
              {cart.map((item) => (
                <li key={item.id} className="list-item">
                  <div>
                    <strong>{item.name}</strong>
                    <p>{formatPrice(item.price)}원</p>
                    <p>수량: {item.quantity}</p>
                    <small>
                      소계: {formatPrice(item.price * item.quantity)}원
                    </small>
                  </div>

                  <div className="actions">
                    <button
                      type="button"
                      className="button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="button"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="button danger"
                      onClick={() => removeItem(item.id)}
                    >
                      삭제
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="cart-footer">
            <p>
              총 금액: <strong>{formatPrice(totalPrice)}원</strong>
            </p>
            <button
              type="button"
              className="button danger"
              onClick={clearCart}
              disabled={cart.length === 0}
            >
              장바구니 비우기
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ShoppingCart;
