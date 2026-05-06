import React,{useState} from "react";

function ShoppingCart(){
    const products=[
        { id: 1, name: '노트북', price: 1000000 },
        { id: 2, name: '마우스', price: 30000 },
        { id: 3, name: '키보드', price: 50000 }
    ];
    const [cart,setCart]=useState([]);

    //장바구니 추가
    const handleAdd=(product)=>{
        const exist = cart.find(item=>item.id===products.id);

        if(exist){
            setCart(cart.map(item=>
                item.id===product.id ?{...item,quantity:item.quantity+1}:item
            ));
        }else setCart([...cart,{...product,quantity:1}]);
    };

    //수량증가
    const handleIncrease=(id)=>{
        setCart(cart.map(item => 
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    }

    //수량감소
    const handleDecrease=(id)=>{
        setCart(cart.map(item => 
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    }

    //삭제
    const handleDelete = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    //총 가격 얼마노
    const total = cart.reduce((sum, item) => 
        sum + (item.price * item.quantity), 0);

    return(
        <div>
            <h1>상품 목록</h1>
            <ul>
            {products.map(product => (
                    <li key={product.id}>
                        {product.name} - {product.price}원 
                        <button onClick={() => handleAdd(product)}>
                            추가
                        </button>
                    </li>
                ))}
            </ul>

            <h2>장바구니</h2>
            {cart.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.price * item.quantity}원 
                            
                            <span>
                                <button onClick={() => handleDecrease(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncrease(item.id)}>+</button>
                            </span>

                            <button onClick={() => handleDelete(item.id)}>
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            
            <h3>총 금액: {total}원</h3>
        </div>
    );
}
 export default ShoppingCart