import './App.css';
import Navbar from'./Navbar'
import Cart from './Cart';
import React from 'react';
import {
  doc,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  // doc,
} from "firebase/firestore";
import { db } from "./index";
import { async } from '@firebase/util';
class  App extends React.Component{
      constructor()
    {
        super();
        //List of CartItems of the Cart
        this.state={
          products:[],
          loading:true
        }
    }
     async componentDidMount() {
 //this is a realtime listener if you change anything in firebase ui will automatically updated 
    const q = query(
      collection(db, "products"),
      where("price", ">", 0),
      orderBy("price")
    );
    await onSnapshot(q,(querySnapshot) => {
      const getProducts = [];
      querySnapshot.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;
        getProducts.push(product);
      });
      console.log(getProducts);
      this.setState({ products: getProducts, loading: false });
    });
  }
    //function to increase the quantity of cartItems
      handleIncreaseEvent= async (product)=>{
      const {products}=this.state
       console.log("Bdha be")
        const index=products.indexOf(product)
        // products[index].qty+=1;
        // this.setState(
        //   {
        //     products:products
        //   }
        // )
        const docRef=doc(collection(db,"products"),products[index].id)
        await updateDoc(docRef,{
          qty:products[index].qty+1
        });
            };
            //function to decrease the quantity of cartItems
      handleDecreaseEvent=async (product)=>{
        console.log("ghta bhai")
        const {products}=this.state
        const index=products.indexOf(product)
        if(products[index].qty===0)
        {
          return;
        }
        // else
        // {
        // products[index].qty-=1;
        // }
        // this.setState({
        //   products  //same as products:products as name is same
        // })
        else{
        const docRef=doc(collection(db,"products"),products[index].id)
        await updateDoc(docRef,{
              qty:products[index].qty-1

        });
      }
      };
      handleDeleteButton=(id)=>{
        const {products}=this.state;
        //filtre function cannot be used in empty array value
        // const items=products.filter((item)=>item.id!==id)//give value of item with different id
        // this.setState({
        //   products:items
        // })
        const docRef=doc(collection(db,"products"),id)
        {
          deleteDoc(docRef)
          .then(()=>{
            console.log("deleted",id);
          })
          .catch((error)=>{
            console.log("error",error);
          })
        }
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
  const {products,loading}=this.state
  return (
    <div className="App">
      <Navbar count ={this.getCartCount()}/>
      {loading&&<div style={{fontSize:50}}>Loading...</div>}
      <Cart
                 products={products}
            onIncreaseQuantity={this.handleIncreaseEvent}
            onDecreaseQuantity={this.handleDecreaseEvent}
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