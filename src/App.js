import './App.css';
import Navbar from'./Navbar'
import Cart from './Cart';
import React from 'react';
class  App extends React.Component{
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
            img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572386470',
            id:1   
          },
          {

            price:1998,
            title:'Laptop',
            qty:2,
            img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gallery3-20201110?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1632937845000',
            id:12
          },
          {

            price:999,
            title:'Watch',
            qty:1,
            img:'https://m.media-amazon.com/images/I/61vfqV8-eiL._UX342_.jpg',
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
        if(products[index].qty===0)
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
      handleDeleteButton=(id)=>{
        const {products}=this.state;
        //filtre function cannot be used in empty array value
        const items=products.filter((item)=>item.id!==id)//give value of item with different id
        this.setState({
          products:items
        })
      }
      getCartCount=()=>{
        const {products}=this.state;
        let count=0;
        products.forEach((product)=>{
          count+=product.qty;
        })
        return count;
      }
      getCartTotal=()=>{
        const {products}=this.state
        let total=0;
        products.map((product)=>{
          total+=product.price*product.qty;
        })
        return total;
      }
  render()
  {
  const {products}=this.state
  return (
    <div className="App">
      <Navbar count ={this.getCartCount()}/>
      <Cart
                 products={products}
            onIncreaseQuantity={this.handleIncreaseEvent}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            OnDeleteItem={this.handleDeleteButton}
       />
       <div style={{padding:10,fontSize:40, display:'flex',justifyContent:'center', alignItems:"center"}}>
        TOTAL:{this.getCartTotal()}
       </div>
    </div >
  );
}
}

export default App;
