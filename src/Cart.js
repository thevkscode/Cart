import React from 'react';
import CartItem from "./CartItem";
export default class Cart extends React.Component{
        constructor()
    {
        super();
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
           />
           )
          })}
        
        </div>
       
      );
    }
}