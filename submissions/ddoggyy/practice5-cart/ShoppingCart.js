import { useState } from "react";

export default function ShoppingCart() {
    const products = [
        { id: 1, name: '노트북', price: 1000000 },
        { id: 2, name: '마우스', price: 30000 },
        { id: 3, name: '키보드', price: 50000 }
    ];

    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        setCart((prevCart) => {
            const selectedProduct = products.find((product) => product.id === id);
            const existingProduct = prevCart.find((product) => product.id === id);

            if (existingProduct) {
                return prevCart.map((product) =>
                    product.id === id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                );
            }

            return [...prevCart, { ...selectedProduct, quantity: 1 }];
        });
    };

    const subCart = (id) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((product) => product.id === id);

            if (!existingProduct) {
                return prevCart;
            }

            if (existingProduct.quantity <= 1) {
                return prevCart.filter((product) => product.id !== id);
            }

            return prevCart.map((product) =>
                product.id === id
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
        });
    };

    const removeCart = (id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    };

    const resetCart = () => {setCart([])};
    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

    return (
        <div>
            <h2>상품 목록</h2>

            {products.map((product) => (
                <p key={product.id}>
                    상품명: {product.name} / 가격: {product.price}원 {' '}
                    <button onClick={() => addCart(product.id)}>추가</button>
                </p>
            ))}

            <h2>장바구니 목록</h2>
            {cart.length === 0 ? (<h3>장바구니에 상품이 없습니다</h3>) : 
            (
                <>
                    {cart.map((product) => (
                        <p key={product.id}>
                            상품명: {product.name} / 가격: {product.price}원 / 수량: {product.quantity} {' '}
                            <button onClick={() => addCart(product.id)}>수량 추가</button>
                            <button onClick={() => subCart(product.id)}>수량 감소</button>
                            <button onClick={() => removeCart(product.id)}>장바구니에서 상품 삭제</button>
                        </p>
                    ))}
                    <button onClick={() => resetCart()}>장바구니 비우기</button>
                </>
            )}

            <h3>총 가격: {totalPrice.toLocaleString()}원</h3>
        </div>
    );
}