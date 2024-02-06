import React from 'react'
import plug from "../images/plug.png"

function Contact() {
  return (
   <>
    <section id='contact'>
      <div className='container-5'>

      <div className='cont-col'> 
        <div className='contact-head'>
        <h2>Contact Us</h2>
        <img src={plug} alt=''/>
        </div>

        <div className='contact-form'>
          <form>
            <div className='form-wrapper'>
              <input type='text' placeholder='Name'/>
            </div>

            <div className='form-wrapper'>
              <input type='text' placeholder='Email'/>
            </div>

            <div className='form-wrapper'>
              <input type='text' placeholder='Phone Number'/>
            </div>

            <textarea rows={5} color={40} placeholder='Message'></textarea>

            <input type='submit' className='btn-2' value="Submit"/>
          </form>
          </div>
        </div>

        <div className='cont-col'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235526.9495894995!2d75.69903629556948!3d22.72420499674329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1705764545967!5m2!1sen!2sin" width="500" height="500" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
   </>
  )
}

export default Contact
