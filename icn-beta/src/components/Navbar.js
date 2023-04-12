import { Link } from 'react-router-dom'

//styles and svg files
import './Navbar.css'
import Temple from '../assets/ICN.svg'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {

  const {logout, isPending} = useLogout()
  const { user } = useAuthContext()


  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img src={Temple} alt="INC logo" />
                <span> Indian Construction Network </span>
            </li>

            {!user && (
              <>
                <li> <Link to='/login'> Login </Link> </li>
                <li> <Link to='/signup'> Signup </Link> </li>
              </>
            )} 

                    
            <li> <Link to='/review'> Rate us </Link></li>
            <li> <Link to='/contactus'> Contact us </Link> </li>
            <li> <Link to='/aboutus'> About us </Link> </li>
           
            
            {user && (
              <>
                <li>
                  {!isPending &&  <button className="btn" onClick={logout}> Logout </button>}
                  {isPending &&  <button className="btn" disabled> Logging out... </button>}
                </li>            
              </>
            )}
            

        </ul>        
    </div>
  )
}
