import './Home.css'
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useState } from 'react'
import { projectFirestore } from '../../firebase/config'
import HomeProductFilter from './HomeProductfilter'
import HomeProductCard from './HomeProductCard'

export default function Home() {
  const [currentFilter, setCurrentFilter] = useState('All')
  const { documents, error } = useCollection('products')
  const { user } = useAuthContext()

  const changeFilter = (newFilter) =>{
    setCurrentFilter(newFilter)
  }

  const products = documents ? documents.filter((document) => {
    switch(currentFilter){
      case 'All':
        return true

      case 'Basic Necessities':
        return document.category === 'basics'

      case 'Households':
        return document.category === 'households'  

      case 'Rentals': 
        return document.category === 'rentals'

      case 'Construction Personnel': 
        return document.category === 'construction'

      case 'Building Material Supplier': 
        return document.category === 'materials'

      case 'Medic and Miscellaneous':   
        return document.category === 'misc'

      default:
        return true        
    }

  }) : null

  let Product
  const addToCart = (product) => {
    Product=product
    Product['qty'] = 1
    Product['TotalProductPrice'] = Product.qty * Product.price
    projectFirestore.collection('Cart ' + user.uid).doc(product.id).set(Product).then(() => {
      console.log('successfully added to cart', user.uid, product.id)
    })
  }

return (
  <div>
      <h2 className="page-title"> Home </h2>
      { error && <p className='error'> {error} </p> }
      { documents && <HomeProductFilter currentFilter={currentFilter} changeFilter={changeFilter} />}      
      { products && <HomeProductCard products={products} addToCart={addToCart}/> }    
  </div>
)
}