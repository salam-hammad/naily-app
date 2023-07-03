import React from 'react'
import logo from '../Images/logo.png';

export default function AbouteUs() {
  return (
    <div>
      <div className='container-fluid' id="AboutUs">
        <div className='container'>
            <div className='row g-5'>
                <div className='col-md-6 col-lg-8 col-xl-8 col-xxl-8'>
                    <div 
                      data-aos='fade-up'
                      data-aos-duration="2000"
                      data-aos-once="true">
                        <h3 className='' style={{color:'#491D4D'}}>About Us</h3>
                        <p>Nilay application for beauty services and appointment booking services
The application is supervised by a group of beauty centers, photography and everything that women need in the Arab world
We also offer you a selection of high-quality products in the field of beauty and care.</p>
                    </div>
                </div>
                <div className='col-md-6 col-lg-4 col-xl-4 xol-xxl-4'>
                    <div className='text-center' 
                        data-aos='zoom-in'
                        data-aos-duration="2000"
                        data-aos-once="true">
                        <img className='img-fluid w-50'  src={logo}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
