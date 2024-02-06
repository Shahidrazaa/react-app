import React from 'react'
import banner from "../images/slider-img.jpg"
import Footer from './Footer'


function Home() {
  return (
    <>
    <section id='banner'>
      <div className='container'>
        <div className='col-1'>
        <div className='banner_cont'>
        <h1>
          Electrical <br/>Service<br/>Providers
        </h1>

        <p>it is along established fact that a reader will be distracted by the readable
        content of a page when looking at its layout. The point of using Lorem</p>

        <button type='button' className='btn-1'>Contact Us</button>
        </div>
        </div>
        
        <div className="col-2">
           <div className='banner_img'>
              <img src={banner} alt=''/>
              <div>
             {/* <img src={banner2}/> */}
           </div>
           </div>
           
        </div>
      </div>
    </section>

    <Footer></Footer>
    </>
  )
}

export default Home
