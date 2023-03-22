//styles
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css'
//pages
// import Landing from './pages/landing/Landing'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Aboutus from './pages/aboutus/Aboutus'
import Contactus from './pages/contactus/Contactus'
import Create from './pages/create/Create'


//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { useAuthContext } from './hooks/useAuthContext';
import Dashboard from './pages/dashboard/Dashboard';
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import Success from './pages/cart/Success';
import Canceled from './pages/cart/Canceled';


function App() {

  const {user, authIsReady } = useAuthContext()  

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          
          <div className="container">
            <Navbar />       

              <Switch>
                {/* <Route exact path='/'>
                  <Landing />
                </Route> */}


                <Route path='/home'>
                  {!user && <Redirect to='/login'/>}   
                  {user && <Home /> } 
                </Route>

                <Route path='/dashboard'>
                  {!user && <Redirect to='/login'/>} 
                  {user && <Dashboard /> }
                </Route>


                <Route path='/create'>
                  {!user && <Redirect to='/login'/>} 
                  {user && <Create /> }
                </Route>

                <Route path='/cart'>
                  {!user && <Redirect to='/login'/>} 
                  {user && <Cart /> }
                </Route>

                <Route path='/products/:id'>
                  {!user && <Redirect to='/login'/>} 
                  {user && <ProductDetails /> }
                </Route>



                <Route path='/login'> 
                  {!user && <Login />}
                  {user && <Redirect to='/home'/>}                   
                </Route>


                <Route path='/signup'> 
                  {!user && <Signup />}
                  {user && <Redirect to='/home'/>}                   
                </Route>

                <Route path='/success'> 
                  {!user && <Login />}
                  {user && <Success />}                   
                </Route>

                <Route path='/canceled'> 
                  {!user && <Login />}
                  {user && <Canceled />}                   
                </Route>


                <Route path='/contactus'> 
                  {!user && <Contactus />}
                  {user && <Contactus />}
                 </Route>


                <Route path='/aboutus'> 
                  {!user && <Aboutus />}
                  {user && <Aboutus />}
                </Route>
                
              </Switch>
          </div>

        
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
