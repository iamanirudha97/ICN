import formatCurrency from '../../utitlities/formatCurrency'
import './Home.css'

export default function IndividualProduct({individualProduct, addtoCart}) {
    const handleAddtoCart = () => {
        addtoCart(individualProduct)
    }

  return (
    <div className="card">
          <div style={{flex : '1 0 0'}}>
            <img className="product-img" src={individualProduct.productImage} alt="Product-Img" />

            <h2> {individualProduct.title} </h2>
            <p className="price"> {formatCurrency(individualProduct.price)} </p>
            <p className='description'> {individualProduct.desc} </p>
          </div>
          <button onClick={handleAddtoCart}>Add to Cart</button>
      </div>
  )
}