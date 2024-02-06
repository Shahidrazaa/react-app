import React from 'react'
import about from "../images/about-img1.jpg"
import about2 from "../images/about-img2.jpg"
import plug from "../images/plug.png"
import Footer from './Footer'

function About() {
  return (
   <>
    <section id='about'>
      <div className='container'>
        <div className='col-1'>
          <div className='banner_cont'>
            <div className='plug'>
            <h2>About US</h2>
            <img src={plug} alt=''/>
            </div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
            </p>

            <button type='button' className='btn-2'>Read More</button>
          </div>
        </div>

        <div className='col-2'>
          <div className='about_img'>
            <img src={about} alt=''/>
            <div className='about_img2'>
             <img src={about2} alt=''/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
   </>
  )
}

export default About
