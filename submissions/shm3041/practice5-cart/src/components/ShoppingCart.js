import { useState } from "react";

export default function ShoppingCart() {
    const products = [
        { id: 1, name: '노트북', price: 1000000 },
        { id: 2, name: '마우스', price: 30000 },
        { id: 3, name: '키보드', price: 50000 }
    ];

    const [cart, setCart] = useState([]);

    // 상품 목록에 아이템 추가
    const addToCart = (product) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    // 상품 수량 증가
    const increaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    // 상품 수량 감소
    const decreaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => item.quantity > 0));
    };

    // 상품 목록에서 아이템 삭제
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // 총 가격 계산
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div>
            <h2>상품 목록</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>작업</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>₩{product.price.toLocaleString()}</td>
                            <td>
                                <button onClick={() => addToCart(product)}>추가</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>장바구니</h2>
            {cart.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                <>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>상품명</th>
                                <th>가격</th>
                                <th>수량</th>
                                <th>소계</th>
                                <th>작업</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>₩{item.price.toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </td>
                                    <td>₩{(item.price * item.quantity).toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => removeFromCart(item.id)}>삭제</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <h3>총 금액: ₩{totalPrice.toLocaleString()}</h3>
                    <button onClick={() => setCart([])}>장바구니 비우기</button>
                </>
            )}
        </div>
    );
}