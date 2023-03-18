import './Cart.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'
import CartProducts from './CartProducts'
import formatCurrency from '../../utitlities/formatCurrency'

// import StripeCheckout from 'react-stripe-checkout'
// import axios from 'axios'
// import { useHistory } from 'react-router-dom'



import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStripe } from '@stripe/react-stripe-js'
import { fetchFromAPI } from '../../helpers'

toast.configure()

export default function Cart() {
  const { user } = useAuthContext()
  const [cartProducts, setCartProducts] = useState([])
  const [email, setEmail] = useState('')
  const stripe = useStripe()

  useEffect(() => {
    if(user){
      projectFirestore.collection('Cart ' + user.uid).onSnapshot(snapshot => {
        const newCartProduct = snapshot.docs.map((doc) => ( {
          ID: doc.id,
          ...doc.data(),
        }))
        setCartProducts(newCartProduct);
      })
    } 
    else {
      console.log('User is not logged in to retrieve the cart')
    }

  }, [user])

  //Total Quantity
  const qty = cartProducts.map(cartProduct=>{
    return cartProduct.qty;
  })
  const reducerOfQty = (accumulator, currentValue)=>accumulator+currentValue; // reducing the qty in a single value
  const totalQty = qty.reduce(reducerOfQty,0);

  //Total price
  const price = cartProducts.map((cartProduct)=>{
    return cartProduct.TotalProductPrice;
  })
  const reducerOfPrice = (accumulator,currentValue)=>accumulator+currentValue; // reducing the price in a single value
  const totalPrice = price.reduce(reducerOfPrice,0);



  //global variable
  let Product
  const cartProductIncrease = (cartProduct) =>{
    Product = cartProduct
    Product.qty = Product.qty + 1
    Product.TotalProductPrice = Product.price * Product.qty
    if(user){
      projectFirestore.collection('Cart ' + user.uid).doc(cartProduct.id).update(Product).then(() => {
        console.log('increased product quantity')
      })
    }else{
      console.log('user is not logged in to increase quantity')
    }

  }

  const cartProductDecrease = (cartProduct) => {
    Product=cartProduct
    if(Product.qty > 1){
      Product.qty = Product.qty - 1
      Product.TotalProductPrice = Product.price * Product.qty
      if(user){
        projectFirestore.collection('Cart ' + user.uid).doc(cartProduct.id).update(Product).then(() => {
          console.log('decreased product quantity')
        })
      }else{
        console.log('user is not logged in to decrease quantity')
      }
    }else{
      console.log('reached minimum quantity')
    }
  }

  //handling checkout items
  const handleCheckout = async (e) => {
    e.preventDefault()
    console.log(cartProducts)    
    const line_items = cartProducts.map(product => {
      return {
        quantity: product.qty,
        price_data: {
          currency: 'inr',
          unit_amount: product.price * 100,
          product_data: {
            name: product.title,
            description: product.description,
            images: [product.productImage],
          }
        }
      }
    })
    
    const response = await fetchFromAPI('create-checkout-session', {
      body: { line_items, customer_email: email }
    })

    const { sessionId } = response
    const { error } = await stripe.redirectToCheckout({
      sessionId
    })

    if(error){
      console.log(error)
    }
  }
  

  return (
    <div>
      {cartProducts.length < 1 && (<p> No products to show</p>)}
      {cartProducts.length >  0 && (
        <div className='container-fluid'> 
          <h1 className='text-center'> Your Cart </h1>
          <div> 
            <CartProducts 
              cartProducts={cartProducts} 
              cartProductIncrease={cartProductIncrease} 
              cartProductDecrease={cartProductDecrease}
             /> 
          </div>
          
          <div className='summary-box'>
            <h5>Cart Summary</h5>
            <br></br>
              
              <div>
                Total No of Products: <span> {totalQty} </span>
              </div>
              
              <div>
                Total Price to Pay: <span> { formatCurrency(totalPrice) } </span>
              </div>
              <br></br>

              <div>
                <form onSubmit={handleCheckout}>
                  <div>
                    <input type="email"
                      placeholder='Enter email to checkout' 
                      onChange={e => setEmail(e.target.value)}
                      value={email}/>
                  </div>

                  <button className='checkout-btn'> Checkout </button>

                </form>                
              </div>
              
            </div>  

            
        </div>
        
      )}       
    </div>
  )
}