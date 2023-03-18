import './ProductList.css'
import { Link } from 'react-router-dom'

export default function ProductList({ products }) {
    
  return (
    
    <div className='product-list'>

        
        {products.length === 0 && <p> No Products added yet</p>}
        {products.map( product => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className='product-card'>
                <div><img className='product-img' src={ product.productImage } alt=" product_Image"/></div>
                <div className='product-description'> 
                    <h4> { product.title }</h4> 
                    <p> {product.desc} </p>                    
                </div>
                
                <div className='product-price'> 
                <p> Price : ₹{product.price}   </p>
                <p> <em> Free Delivery </em></p>    
                </div>
                
             </div>
            </Link>
        ))}
    </div>
  )
}
