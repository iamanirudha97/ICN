import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import ProductComments from './ProductComments'
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from '../../hooks/useAuthContext'
import { projectFirestore } from '../../firebase/config'

export default function ProductDetails() {
    const { id } = useParams()
    const { error, document } = useDocument('products', id)
    const { deleteDocument } = useFirestore('products')
    const { user } = useAuthContext()

    if(error){
        return <div className="error"> {error} </div>
    }

    if(!document){
        return <div className="loading">Loading...</div>
    }

    const handleDelete = () => {
        deleteDocument(document.id)
    }

 let Product = document
    const handleClick = () => {
      Product['qty'] = 1
      Product['TotalProductPrice'] = Product.qty * Product.price
      projectFirestore.collection('Cart ' + user.uid).doc(document.id).set(Product).then(() => {
        console.log('successfully added to cart', user.uid, document.id)
      })    
    }
    

  return (
    <div className='product-details'>
        {user.uid === document.createdBy.id && ( <button onClick={handleDelete} className="btn"> Remove product from the market place </button> )}
        <div className='upper'>
            <div> <img src={document.productImage} alt="product-img" className="product-image" /> </div>
            <div className='information'> 
                <h2> {document.title} </h2>
                <h4> Company Name : {document.companyName}</h4>
                <h6> Address : {document.companyAddress}</h6>
                <h5> GST : {document.gst}</h5>
                <button className="btn">Bid for the product </button>
            </div>
        </div>
        
        <div className='bottom'>
            <p className='product-description'> {document.desc} </p>
            <button className="btn" onClick={handleClick}>Buy</button>
        </div>
        
        < ProductComments product={document} />
        
    </div>
  )
}
