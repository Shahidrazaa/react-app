import React from 'react'
import Footer from './Footer'
import plug from "../images/plug.png"
import card from "../images/blog1.jpg"
import card2 from "../images/blog2.jpg"

function Blog() {
  return (
    <>
        <section id='blog'>
            <div className='head'>
              <h2>Blog</h2>
              <img src={plug} alt=''/>
            </div>

            <div className='container-3'>

              <div className='card_wrapper'>
              <div className='card'>
                 <img src={card} alt=''/>

                 <div className='card_content'>
                 <h3>Blog Title Goes Here</h3>
                 <p>There are many variations of passages of Lorem Ipsum available,but the majority have suffered altreation in same form,by injected humour,or randomised</p>
                 </div>
               </div>

               <div className='card'>
                <img src={card2} alt=''/>
                
                <div className='card_content'>
                 <h3>Blog Title Goes Here</h3>
                 <p>There are many variations of passages of Lorem Ipsum available,but the majority have suffered altreation in same form,by injected humour,or randomised</p>
                 </div>
               </div> 
              </div> 

            </div>
        </section>
        
        <Footer></Footer>
    </>
  )
}

export default Blog
