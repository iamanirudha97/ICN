import './Aboutus.css'
import Devs from './Devs'
import { FaLinkedin, FaQuoteLeft, FaQuoteRight, FaAt } from 'react-icons/fa'

export default function Aboutus() {

  return (
    <>
    <div className='container'>
      <h1 className='page-heading'>Developers</h1>
      <div className='row'>
       {Devs.map((dev) => {
         const{ id, name, avatar, role, description, email, linkedin_url } = dev;
 
         return <div key={id} className='col-12 col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6'>
           <div className='card'>
             <div className='profile-pic text-center'>
               <img src={avatar} alt={name}/>
             </div>
             <h3 className='dev-name text-center'> {name} </h3>
             <span className='dev-role text-center'> {role} </span>
             <p className='dev-description text-center'>
               <FaQuoteLeft className='quote-right'/>
                 {description}
               <FaQuoteRight className='quote-left'/>
             </p>
             <div className='dev-icons'>
               <ul className='icon-list'>
                 {email && <li> <a href={email} className='icon' target='_blank' rel='noreferrer'> <FaAt /> </a></li>}                
                 
                 {linkedin_url && <li> <a href={linkedin_url} className='icon' target='_blank' rel='noreferrer'> <FaLinkedin /> </a></li>}                 
               </ul>
             </div>
           </div>
         </div>
       })
       }
       
 
      </div>
    </div>
   </>
  )
}