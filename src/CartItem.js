import React from 'react';
import "./index.css"
class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>Phone</div>
                    <div style={{ color: '#777' }}>mrp 999 rs</div>
                    <div style={{ color: '#777' }}>Qty:1</div>
                    <div className="cart-item-actions"></div>
                </div>
            </div>
        );
    }
}
const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 5,
        background: '#ccc'
    }
}
export default CartItem;