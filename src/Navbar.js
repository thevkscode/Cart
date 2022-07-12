import { findByLabelText } from '@testing-library/react'
import { Row } from 'antd'
import React from 'react'
const Navbar=(props)=>{
return(
    <div style={styles.cartIconContainer}>
        <div style={styles.nav}>
            <img 
            style={styles.cartIcons}
            alt="cart" src='https://cdn-icons-png.flaticon.com/512/1170/1170678.png'/>
            <span style={styles.cartCount}>{props.count}</span>
        </div>
    </div>
);
}
const styles={
    cartIcons:{
        height:36,
        marginRight:15
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    cartIconContainer:{
        posittion:'relative',
    },
    cartCount:{
        position:'absolute',
        borderRadius:'50%',
        background:'yellow',
        padding:'4px 8px',
        marginRight:4,
        top:6

    }
}
export default Navbar