import avatar_shreeshail from '../../assets/media/shreeshail.png'
import background from '../../assets/media/background.png'

import './Aboutus.css'
import Devs from './Devs'
import { FaLinkedin, FaQuoteLeft, FaQuoteRight, FaAt } from 'react-icons/fa'

export default function Aboutus() {

  return (
    <div>
      <div className='company-desc'>
        <h2 style={{textAlign: 'center', marginTop: '25px', marginBottom: '45px'}} > About the Company</h2>  

       
          <img src={background} alt="background" style={{
                display: 'block',
                width: '50%',
                margin: 'auto',
                boxShadow: 'rgba(0, 0, 0, 0.02) 0px 5px 15px',
                marginBottom: '45px',
                borderRadius: '20px'
          }}/>
        
        <p>
          Welcome to Indian Construction Network, a company dedicated to providing high-quality construction and related services to customers across India. Our team of four Civil Engineering 
          students has developed a platform that connects customers with the right products and services at the best prices.
        </p>      
        
          
        <p>
          Our mission is to create a sustainable and equitable future for the construction industry. We believe that by addressing the lack of efficiency and fair pricing in the industry, we can
          make a positive impact on the lives of our customers and vendors. Our platform, Indian Construction Network, provides a space for small-scale vendors to reach a wider audience and 
          compete fairly with larger-scale vendors. At the same time, customers can access a range of products and services that meet their needs and budget.
        </p>
          
        <p>
          At Indian Construction Network, we offer a range of services to our customers. Whether you're looking for building construction materials, machinery, or construction professionals,
          we have you covered. Our platform also offers basic services such as plumbing, electrical work, and painting, all performed by skilled certified professionals who are vetted for
          quality and safety. We try to provide the best from all sectors including basic necessities, households, rentals and emergency services.
        </p>
          
        <p>
          We are committed to providing exceptional customer service and support. Our team is available to answer any questions or concerns you may have about our platform or services. 
          We strive to make your experience with us as smooth and hassle-free as possible.
        </p>

        <p>
          Join us on the Indian Construction Network and become part of a community dedicated to building a better future for the construction industry. Together, we can create a more 
          sustainable and equitable ecosystem that benefits everyone.
        </p>        

        

      </div>

      <div className='aboutUs-desc'>
        <h2 style={{textAlign: 'center', marginTop: '25px', marginBottom: '25px'}} > About Us </h2>   

          <p>Hello!! Welcome to Indian Construction Network.</p>
          <p>We are lucky to have you here.</p>

          <p>
            We are building a sustainable future for the construction industry! We are a team of four Civil Engineering students from SJCEM Palghar: Rishabh, Harshal, Chandrakant, and Ankit. We have been
            studying the ins and outs of the construction industry for the past four years. During this process we also faced many academic difficulties, but we overcame those and got back on track. As 
            Civil Engineering students and developing a Management based project a lot of questions were raised but we were very keen to bring a developmental change to our construction industry. Also,
            during our curriculum, we have noticed that there is a lack of efficiency and fair pricing in the industry. We decided to take action and work on developing sustainable parameters to support
            the industry.
          </p>

          <p>
            With the help of our guide, Mr. Shreeshail Heggond, we started our major project: Indian Construction Network. Our goal with ICN is to support and regrow small-scale vendors, while
            keeping large-scale vendors and customers in mind. We believe that by considering the needs of all stakeholders, we can create a more sustainable and equitable future for the 
            construction industry.
          </p>

          <p>
            On ICN, customers can find the right product at the best price, while vendors can reach a wider audience and compete fairly. Our platform also serves as a space for construction 
            professionals to connect and collaborate on projects. We believe that by creating a more efficient and collaborative ecosystem, we can bridge the gap between different stakeholders
            in the industry and make a positive impact.
          </p>

          <p>
            We are constantly learning and growing, and we are passionate about creating a better future for the construction industry. Our project has received praise and recognition from 
            our peers and mentors, and we are excited to see where it will take us.
          </p>

          <p>
            Join us on the Indian Construction Network and become part of a movement towards a more sustainable and equitable construction industry. Together, we can build a better future for all.
          </p>

      </div>

      <h3 style={{textAlign: 'center', marginTop: '50px', marginBottom: '25px'}}> Project Guide </h3> 

      <div className='project-guide' >       
           <div className='card' style={{alignItems : 'center'}}>
             <div className='profile-pic text-center'>
               <img src={avatar_shreeshail} alt='shreeshail_Sir'/>
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