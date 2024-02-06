import React from 'react'

function Footer() {
  return (
   <>
    <section id='footer'>
        <div className='container-2'>
          <div className='links'>
            <h3>About Us</h3>
            <ul>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Address</li>
            </ul>
          </div>

          <div className='links'>
             <h3>Our Service</h3>
             <ul>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Address</li>
             </ul>
          </div>

          <div className='links'>
             <h3>Contact US</h3>
             <ul>
                <li>About</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Address</li>
             </ul>
          </div>

        </div>
    </section>
    <div className='footer_last'>
            <h5>@2024 All Rights Reserved By React Project</h5>
        </div>
   </>
  )
}

export default Footer
