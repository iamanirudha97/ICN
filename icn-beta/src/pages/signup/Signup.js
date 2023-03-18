import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [userRole, setUserRole] = useState('')
  const [gst, setGst] = useState('')
  const [thumbnailError, setThumbnailError] = useState(null)
  const {signup, error, isPending } = useSignup()


  const handleSubmit = (e) =>{
    e.preventDefault()
    signup(email, password, displayName, userRole, thumbnail)
    console.log(`signup component userRole: ${userRole}`)
  }

  const handleFileChange = (e) => {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)
    
    if(!selected){
      setThumbnailError('Please select a file')
      return
    }

    if(!selected.type.includes('image')){
      setThumbnailError('Upload file must be of Image format')
      return
    }

    if(selected.size > 100000){
      setThumbnailError('Image file size must be less than 100kb')
      return
    }  
    setThumbnailError(null)
    setThumbnail(selected) 
    console.log('thumbnail uploaded')
  }
  

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2> Sign up </h2>

      <label>
        <span> Email ID: </span>
        <input 
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </label>

      <label>
        <span> Password: </span>
        <input 
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
      </label>

      <label>
        <span> Display name: </span>
        <input 
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          required
        />
      </label>     

      <label> 
        <span> Are you a Consumer or a Vendor ? : </span>
        <select value={userRole} onChange={(e) => setUserRole(e.target.value)} required>
          <option>Select a role </option>
          <option>Consumer</option>
          <option>Vendor</option>
        </select>
      </label>

      {userRole === 'Vendor' && <label>
        <span> GST Number : </span>
        <input 
          required
          type='text'
          onChange={(e) => setGst(e.target.value)}
          value={gst}          
        />
      </label>}

      <label>
        <span> Display Picture: </span>
        <input 
          type='file'
          onChange={handleFileChange}   
          required      
        />
      </label>

      {thumbnailError && <div className="error"> {thumbnailError} </div>}
      {!isPending && <button className="btn"> Sign Up </button>}
      {isPending && <button className="btn" disabled> Signing up </button>}

      {error && <div className="error">{error}</div>}
    </form>
  )
}
