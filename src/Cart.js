import React from 'react';
import CartItem from "./CartItem";
export default class Cart extends React.Component{
        constructor()
    {
        super();
        //List of CartItems of the Cart
        this.state={
          products:[
          {

            price:999,
            title:'Phone',
            qty:1,
            img:'',
            id:1   
          },
          {

            price:1998,
            title:'Laptop',
            qty:2,
            img:'',
            id:12
          },
          {

            price:999,
            title:'Watch',
            qty:1,
            img:'',
            id:13
          }

          ]
        }
    }
    //function to increase the quantity of cartItems
      handleIncreaseEvent=(product)=>{
      const {products}=this.state
       console.log("Bdha be")
        const index=products.indexOf(product)
        products[index].qty+=1;
        this.setState(
          {
            products:products
          }
        )
            }
            //function to decrease the quantity of cartItems
      handleDecreaseQuantity=(product)=>{
        console.log("ghta bhai")
        const {products}=this.state
        const index=products.indexOf(product)
        if(products[index].qty==0)
        {
          return;
        }
        else
        {
        products[index].qty-=1;
        }
        this.setState({
          products  //same as products:products as name is same
        })
      }
    render()
    {
      const {products}=this.state;
      return(
        
        <div>
          {products.map((product)=>{
           return (
           <CartItem 
           product={product}
            key={product.id}
            onIncreaseQuantity={this.handleIncreaseEvent}
            onDecreaseQuantity={this.handleDecreaseQuantity}
           />
           )
          })}
        
        </div>
       
      );
    }
}