import { useState } from 'react';

const products = [
	{ id: 1, name: '노트북', price: 1000000 },
	{ id: 2, name: '마우스', price: 30000 },
	{ id: 3, name: '키보드', price: 50000 },
    { id: 4, name: '프로틴', price: 60000 },
    { id: 5, name: '허성우의 숙취해소제', price: 5000 },
    { id: 6, name: '박은서의 공주 변신 키트', price: 69690 },
    { id: 7, name: '김수빈의 맥북 프로 M5', price: 2400000 }
];

function ShoppingCart() {
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
			return;
		}

		setCart([...cart, { ...product, quantity: 1 }]);
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
		(total, item) => total + item.price * item.quantity,
		0
	);

	return (
		<div>
			<h1>쇼핑 카트</h1>

			<h2>상품 목록</h2>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						{product.name} - {product.price.toLocaleString()}원
						<button onClick={() => addToCart(product)}>추가</button>
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
							<li key={item.id}>
								{item.name} - {item.price.toLocaleString()}원 x {item.quantity}
								<button onClick={() => increaseQuantity(item.id)}>+</button>
								<button onClick={() => decreaseQuantity(item.id)}>-</button>
								<button onClick={() => removeItem(item.id)}>삭제</button>
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
