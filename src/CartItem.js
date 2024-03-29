import React from 'react';
import "./index.css"
const CartItem =(props)=>{
    
            const {title,qty,price,id}=props.product;
        return (
            <div className="cart-item">
                {/* {product.jsx} */}
                <div className="left-block">
                    <img style={styles.image} src=
                    {props.product.img}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 30 }}>{title}</div>
                    <div style={{ color: '#777' }}>Mrp:{price}</div>
                    <div style={{ color: '#777' }}>Qty:{qty}</div>
                    <div  className="cart-item-actions">
                        <img 
                        alt='increase' 
                        className='action-icons'
                         src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                         onClick={()=>props.onIncreaseQuantity(props.product)}
                         />
                        <img 
                        alt='decrease' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick={()=>props.onDecreaseQuantity(props.product)}
                        />

                        <img 
                        alt='delete'
                         className='action-icons' 
                        src='https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1659596404~hmac=e405563bf89e4c02c11ca893a58a3fb8'
                        onClick={()=>props.OnDeleteItem(props.product.id)}
                        />

                    </div>
                </div>
            </div>
        );
    }
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 5,
        background: '#ccc'
    }
}
export default CartItem;