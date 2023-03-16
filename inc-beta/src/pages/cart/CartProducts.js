import './Cart.css'
import IndividualCartProduct from "./IndividualCartProduct"

export default function CartProducts({ cartProducts, cartProductIncrease, cartProductDecrease }) {
  return(
    <div className="products-box">
        {cartProducts.map(cartProduct => (
        <IndividualCartProduct 
          key={cartProduct.ID} 
          cartProduct={cartProduct} 
          cartProductIncrease={cartProductIncrease} 
          cartProductDecrease={cartProductDecrease}
        />
      ))}
    </div>
    
  ) 
}