import React from 'react'
import Footer from './Footer'
import plug from "../images/plug.png"
import S1 from "../images/s1.png"
import S2 from "../images/s2.png"
import S3 from "../images/s3.png"
import S4 from "../images/s4.png"
import S5 from "../images/s5.png"
  
function Service() {
  return (
    <>
        <section id='service'>
            <div className='service-head'>
              <h2>Our Services</h2>
              <img src={plug} alt=''/>
            </div>

            <div className='container-4'>
                <div className='service-wrapper'>

                   <div className='box-service'>
                    <img src={S1} alt=''/>

                    <div className='box-content'>
                        <h3>Equipment installation</h3>
                        <p>There are many variations of passages of Lorem Ipsum available,</p>
                    </div>
                   </div>

                   <div className='box-service'>
                    <img src={S2} alt=''/>

                    <div className='box-content'>
                        <h3>Windmill Energy</h3>
                        <p>There are many variations of passages of Lorem Ipsum available,</p>
                    </div>
                   </div>

                   <div className='box-service'>
                    <img src={S3} alt=''/>

                    <div className='box-content'>
                        <h3>Equipment <br/> Maintenance</h3>
                        <p>There are many variations of passages of Lorem Ipsum available,</p>
                    </div>
                   </div>

                   <div className='box-service'>
                    <img src={S4} alt=''/>

                    <div className='box-content'>
                        <h3>Equipment installation</h3>
                        <p>There are many variations of passages of Lorem Ipsum available</p>
                    </div>
                   </div>

                   <div className='box-service'>
                    <img src={S5} alt=''/>

                    <div className='box-content'>
                        <h3>Equipment installation</h3>
                        <p>There are many variations of passages of Lorem Ipsum available</p>
                    </div>
                   </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </>
  )
}

export default Service
