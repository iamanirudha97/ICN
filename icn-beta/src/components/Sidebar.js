import './Sidebar.css'

//imgs
import DashboardIcon from '../assets/dashboard_icon.svg'
import AddIcon from '../assets/add_icon.svg'
import Home from '../assets/home.svg'
import Cart from '../assets/shopping_cart.svg'

import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Avatar from './Avatar'

import { useGetUserRole } from '../hooks/useGetUserRole'

export default function Sidebar() {

    const { user } = useAuthContext()
    const { currentUserRole } = useGetUserRole()
    console.log('current user is', currentUserRole)

  return (
    <div className='sidebar'>
        <div className="sidebar-content">
            <div className="user">
                <Avatar src={user.photoURL}/>
                <p> Hey {user.displayName} </p>
            </div>
            <nav className="links">
                <ul>

                    {currentUserRole === 'Consumer' && (
                        <li>
                        <NavLink exact to='/home'>
                            <img src={Home} alt="home icon" />
                            <span> Home </span>
                        </NavLink>
                        </li>)}

                    {currentUserRole === 'Vendor' && (
                        <li>
                            <NavLink exact to='/dashboard'>
                                <img src={DashboardIcon} alt="dashboard icon" />
                                <span> Dashboard </span>
                            </NavLink>
                        </li>
                    )}
                        
                    

                    {currentUserRole === 'Vendor' && (
                        <li>
                         <NavLink to='/create'>
                             <img src={AddIcon} alt="Add item icon" />
                             <span> Sell New item </span>
                         </NavLink>
                        </li>                        
                    )}
                   

                    {currentUserRole === 'Consumer' && (
                        <li>
                            <NavLink to='/cart'>
                                <img src={Cart} alt="shopping cart icon" />
                                <span> Your Shopping Cart </span>
                            </NavLink>
                        </li>
                    )}

                </ul>
            </nav>
        </div>
    </div>
  )
}
