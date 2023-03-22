import { useState } from 'react'
import './Create.css'
import Select from 'react-select'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCreate } from './useCreate'
import {useFirestore} from '../../hooks/useFirestore'
import { useHistory } from 'react-router-dom'

//category
const categories = [
  { value: 'basics', label: 'Basic Necessities'},
  { value: 'households', label: 'Households'},
  { value: 'rentals', label: 'Rentals'},
  { value: 'construction', label: 'Construction Personnel'},
  { value: 'materials', label: 'Building Materials Supplier'},
  { value: 'misc', label: 'Medic and Miscellaneous'},
]

export default function Create() {

  const { user } = useAuthContext()
  const {error, uploadProductImage } = useCreate()
  const { addDocument } = useFirestore('products') 

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [companyAddress, setCompanyAddress] = useState('')
  const [category, setCategory] = useState('')
  const [gst, setGst] = useState('')
  const [productImage, setProductImage] = useState(null)
  
  const [imageError, setImageError] = useState(null)
  const [formError, setFormError] = useState(null)

  const history = useHistory()


  const handleFileChange = (e) => {
    setProductImage(null)
    let selected = e.target.files[0]
    
    if(!selected){
      setImageError('Please select a image to upload')
      return
    }

    if(!selected.type.includes('image')){
      setImageError('Upload file must be of Image format')
      return
    }

    if(selected.size > 400000){
        setImageError('Image file size must be less than 400kb')
        return
    }
    
     
    setImageError(null)
    setProductImage(selected)
    console.log('Image uploaded', productImage) 
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)
    

    const url = await uploadProductImage(productImage)
    console.log('url is ', url)

    if(!category){
        setFormError('please select a category for your product')
        return
    }

    const createdBy = {
        displayName : user.displayName,
        photoURL : user.photoURL,
        id : user.uid
    }

    console.log('createdBy type', typeof(createdBy), createdBy)
    
    const product = {
        title,
        companyName,
        companyAddress,
        gst,
        desc,
        price,
        category : category.value,
        comments: [],
        createdBy,
        productImage: url
    }

    await addDocument(product) 
    history.push('/dashboard')
            
 }  

  return (
    <div className='create-form' onSubmit={handleSubmit}>
      <h2 className='page-title'> Add item for sale: </h2>
      <form>
        <label>
          <span> Title: </span>
          <input 
            required
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>

        <label>
          <span> Company Name: </span>
          <input 
            required
            type='text'
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
          />
        </label>

        <label>
          <span> Company Address: </span>
          <textarea
            required
            type='text'
            onChange={(e) => setCompanyAddress(e.target.value)}
            value={companyAddress}
          ></textarea>
        </label>

        <label>
          <span> Description of the product: </span>
          <textarea
            required
            type='text'
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
        </label>

        <label>
        <span> GST Number : </span>
        <input 
          required
          type='text'
          onChange={(e) => setGst(e.target.value)}
          value={gst}          
        />
        </label>

        <label>
          <span> Price: </span>
          <input
            required
            type='text'
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </label>

        <label>
          <span> Category: </span>
          <Select options={categories}
          onChange={(option) => setCategory(option)}
          />          
        </label>

        <label>
        <span> Product Picture: </span>
        <input 
          type='file'
          onChange={handleFileChange}   
          required      
        />
      </label>

         
         <button className="btn"> Add item </button>

        {error && <p className='error'> {error} </p>}          
        {imageError && <p className='error'> {imageError} </p>}
        {formError && <p className='error'> {formError} </p>}

      </form>      
    </div>
  )
}
