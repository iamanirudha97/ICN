import './Contactus.css'

export default function Contactus() {
  return (
    <div>
      <div className="contact-us">
      <h2 className='contact-title'> Feel Free to Contact Us</h2>
      <iframe 
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15024.618482090194!2d72.7835079!3d19.7060402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71c92fbd91e67%3A0x2a3ce68676417a45!2sSt.%20John%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1679058180370!5m2!1sen!2sin" 
        height="450" 
        style= {{border:0, width : '95%', marginTop: '40px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      </div>
      

      <div className="form-container">
        <form action="https://formspree.io/f/xbjekvvo" method="POST" className='contact-us-form'>
          <input 
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            required
          />

          <input 
            type="email"
            name="Email"
            placeholder="enter your email ID"
            autoComplete="off"
            required
          />

          <textarea 
            name="message" 
            cols="30" 
            rows="6" 
            autoComplete='off'
            required
            placeholder='Your message'
          ></textarea>

          <input type="submit" value="SEND" className='form-btn' />
        
      </form>
    </div>

    </div>
  )
}


