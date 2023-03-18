import './Login.css'
import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isPending} = useLogin()
  const history = useHistory()

  const handleSubmit = (e) =>{
    e.preventDefault()
    login(email, password) 
    history.push('/')
  }


  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2> Log In </h2>

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

      {!isPending && <button className="btn"> Login </button>}
      {isPending && <button className="btn" disabled> Logging in... </button>}

      {error && <div className="error">{error}</div>}
      
      <p className='no-acc'> <Link to={`/signup`}> Don't Have a Account? Register Now </Link> </p>

    </form>      
  )
}
