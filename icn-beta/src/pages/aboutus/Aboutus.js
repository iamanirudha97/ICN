import avatar_shreeshail from '../../assets/media/shreeshail.png'

import './Aboutus.css'
import Devs from './Devs'
import { FaLinkedin, FaQuoteLeft, FaQuoteRight, FaAt } from 'react-icons/fa'

export default function Aboutus() {

  return (
    <div>
      <div className='company-desc'>
        <h2 style={{textAlign: 'center', marginTop: '30px', marginBottom: '25px'}} > About the Company</h2>
        
        <p> 
          Hello!! Welcome to Indian Construction Network.
        </p>

        <p> We are lucky to have you here. </p>

        <p> 
          Indian Construction Network is a platform developed by four Civil Engineering students from SJCEM Palghar, Rishabh, Harshal, Chandrakant, and Ankit, aimed at 
          building a sustainable future for the construction industry. The students have been studying the industry for the past four years, and during this time, they 
          have noticed a lack of efficiency and fair pricing. With the help of their guide, Mr. Shreeshail Heggond, they started their major project, Indian Construction 
          Network, to address these issues.
        </p>

        <p>
          The goal of ICN is to support and regrow small-scale vendors while keeping large-scale vendors and customers in mind. The platform allows customers to find 
          the right product at the best price, while vendors can reach a wider audience and compete fairly. ICN also serves as a space for construction professionals to 
          connect and collaborate on projects. By creating a more efficient and collaborative ecosystem, the students believe they can bridge the gap between different 
          stakeholders in the industry and make a positive impact.
        </p>

        <p>
          The students are passionate about creating a better future for the construction industry and believe that by considering the needs of all stakeholders,
          they can create a more sustainable and equitable future. Their project has received recognition from their peers and mentors, and they are excited to see 
          where it will take them. The students invite others to join them on Indian Construction Network and become part of a movement towards a more sustainable and
          equitable construction industry. Together, they can build a better future for all.
        </p>

      </div>

      <h3 style={{textAlign: 'center', marginTop: '30px', marginBottom: '25px'}}> Project Guide </h3> 

      <div className='project-guide' >       
           <div className='card' style={{alignItems : 'center'}}>
             <div className='profile-pic text-center'>
               <img src={avatar_shreeshail} alt='shreeshail'/>
             </div>
             <h3 className='dev-name text-center'> Prof. Shreeshail Heggond </h3>
             <span className='dev-role text-center'> <em> Assistant Professor | Civil Dept. | SJCEM </em> </span>
             <p className='dev-description text-center'>
               <FaQuoteLeft className='quote-right'/>
               Scientists dream about doing great things. Engineers do them.
               <FaQuoteRight className='quote-left'/>
             </p>
             <div className='dev-icons'>
               <ul className='icon-list'>
                <li> <a href='mailto:shreeshailh@sjcem.edu.in' className='icon' target='_blank' rel='noreferrer'> <FaAt /> </a></li>               
                 
                <li> <a href='https://www.linkedin.com/in/shreeshail-b-h-a492743a/' className='icon' target='_blank' rel='noreferrer'> <FaLinkedin /> </a></li>                 
               </ul>
             </div>
           </div>
      </div>

      <h3 style={{textAlign: 'center', marginTop: '30px', marginBottom: '25px'}}> Project Members </h3> 

      <div className='members-div'>
        {Devs.map((dev) => {
          const{ id, name, avatar, role, description, email, linkedin_url } = dev;

          return (
            <div className='project-members' key={id} >       
            <div className='card' style={{alignItems : 'center'}}>
              <div className='profile-pic text-center'>
                <img src={avatar} alt={name}/>
              </div>
              <h3 className='dev-name text-center'> {name} </h3>
              <span className='dev-role text-center'> <em> {role} </em> </span>
              <p className='dev-description text-center'>
                <FaQuoteLeft className='quote-right'/>
                { description }
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
          )}        
        )}
      </div>     

    </div>  
  )
}