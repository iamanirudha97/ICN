import './Dashboard.css'
import { useState } from "react"
import {useCollection} from '../../hooks/useCollection'
import ProductList from '../../components/ProductList'
import ProductFilter from './ProductFilter'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function Dashboard() {
    const { documents, error } = useCollection('products')
    const [currentFilter, setCurrentFilter] = useState('My listing')
    const { user } = useAuthContext()

    const changeFilter = (newFilter) =>{
      setCurrentFilter(newFilter)
    }



    const products = documents ? documents.filter((document) => {
      switch(currentFilter){
        case 'See your competition':
          return true
        case 'My listing':
          return document.createdBy.id === user.uid          
        default:
          return true        
      }

    }) : null

  return (
    <div>
        <h2 className="page-title"> Dashboard </h2>
        {error && <p className='error'> {error} </p>}
        {documents && <ProductFilter currentFilter={currentFilter} changeFilter={changeFilter} />}
        {products && <ProductList products={products}/>}
    </div>
  )
}
