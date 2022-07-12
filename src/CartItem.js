import React from 'react';
import "./index.css"
class CartItem extends React.Component {
    render() {
            const {title,qty,price}=this.props.product;
        return (
            <div className="cart-item">
                {this.props.jsx}
                <div className="left-block">
                    <img style={styles.image} />
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
                         onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                         />
                        <img 
                        alt='decrease' 
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick={()=>this.props.onDecreaseQuantity(this.props.product)}
                        />

                        <img 
                        alt='delete'
                         className='action-icons' 
                        src='https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1657193116~hmac=6deb6c69ddd7adaad61602a1b1fafc1b'
                        />
                    </div>
                </div>
            </div>
        );
    }
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