import './Home.css'
// import { Link } from 'react-router-dom'
// import { Row, Col, Card } from 'react-bootstrap'

import IndividualProduct from "./IndividualProduct";


export default function HomeProductCard({ products, addToCart }) {
  return (
    <div className='home-page'> 
      {products.length === 0 && <p> No Products added yet</p>}
      
      {products.map( (individualProduct) => (
        <IndividualProduct key={individualProduct.id} individualProduct={individualProduct} addtoCart={addToCart} />             
        
      ))}
    </div>
  )
}
