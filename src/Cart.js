import React from 'react';
import CartItem from "./CartItem";
const Cart=(props)=>{
      const {products}=props;
        return(
          <div>
            {products.map((product)=>{
            return (
            <CartItem 
            product={product}
              key={product.id}
              onIncreaseQuantity={props.onIncreaseQuantity}
              onDecreaseQuantity={props.onDecreaseQuantity}
              OnDeleteItem={props.OnDeleteItem}
            />
            )
            })}
          </div>
        );
    }
    export default Cart;