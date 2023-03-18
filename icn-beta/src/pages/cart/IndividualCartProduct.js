import './Cart.css'
import {Icon} from 'react-icons-kit'
import {plus} from 'react-icons-kit/feather/plus'
import {minus} from 'react-icons-kit/feather/minus'


import formatCurrency from '../../utitlities/formatCurrency'

import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config'


export default function IndividualCartProduct( {cartProduct, cartProductIncrease, cartProductDecrease} ) {
    const {user} = useAuthContext()

    const handleCartProductIncrease = () => {
        cartProductIncrease(cartProduct)
    }

    const handleCartProductDecrease = () => {
        cartProductDecrease(cartProduct)
    }

    const handleCartProductDelete = () => {
        if(user){
            projectFirestore.collection('Cart ' + user.uid).doc(cartProduct.id).delete().then(() => {
                console.log('successfully deleted')
            })
        }

    }

  return (
    <div className='product'>
    <div className='product-img'>
        <img src={cartProduct.productImage} alt="product-img"/>
    </div>
    <div className='product-text title'>{cartProduct.title}</div>
    <div className='product-text price'>$ {cartProduct.price}</div>
    <span>Quantity</span>
    <div className='product-text quantity-box'>
        <div className='action-btns minus' onClick={handleCartProductDecrease}>
            <Icon icon={minus} size={20}/>
        </div>                
        <div>{cartProduct.qty}</div>               
        <div className='action-btns plus' onClick={handleCartProductIncrease} >
            <Icon icon={plus} size={20}/>
        </div>
    </div>
    <div className='product-text cart-price'> {formatCurrency(cartProduct.TotalProductPrice)}</div>
    <div className='remove-btn' onClick={handleCartProductDelete}> Remove Item </div>            
</div>
  )
}