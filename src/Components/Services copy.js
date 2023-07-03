import React from 'react'
import '../Style/MyStyle.css';
import clean from '../Images/clean.png';
import hall from '../Images/hall.png';
import dress from '../Images/dress.png';
import photography from '../Images/photography.png';
import beauty from '../Images/beauty.png';


export default function Services() {
  return (
    <div>
      <div className='container-fluid parentServeces'id="Services" >
        <div className='container pb-5 pt-4'>
            <h2 className='text-center text-white' 
              data-aos='zoom-in'
              data-aos-duration="2000"
              data-aos-once="true"
              >Services</h2>
            <div className='row g-3 pb-5 mt-5'>
            <div className='col-md-1 col-lg-1 col-xl-1 col-xxl-1'>
</div>
           
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}
                      data-aos='fade-up'
                      data-aos-duration="2000"
                      data-aos-once="true">
                        <img className='imgServices pt-3 mb-3'  src={clean}/>
                        <p className='fw-bold pb-2' style={{color:'#491D4D'}}>Beauty salons</p>
                    </div>
                </div>
              
              
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}
                      data-aos='fade-up'
                      data-aos-duration="2000"
                      data-aos-once="true">
                        <img className='imgServices pt-3 mb-3'  src={hall}/>
                        <p className='fw-bold pb-2' style={{color:'#491D4D'}}> wedding halls</p>
                    </div>
                </div>
              
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}
                      data-aos='zoom-in'
                      data-aos-duration="2000"
                      data-aos-once="true"
                      >
                        <img className='imgServices pt-3 mb-3'  src={dress}/>
                        <p className='fw-bold pb-2 mb-3' style={{color:'#491D4D'}}>Wedding Dresses</p>
                    </div>
                </div>
              
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}
                      data-aos='fade-up'
                      data-aos-duration="2000"
                      data-aos-once="true"
                      >
                        <img className='imgServices pt-3 mb-3'  src={photography}/>
                        <p className='fw-bold pb-2' style={{color:'#491D4D'}}>Photography</p>
                    </div>
                </div>
              
                <div className='col-md-2 col-lg-2 col-xl-2 col-xxl-2'>
                    <div className='bg-white text-center px-3 h-100' style={{borderRadius:22}}
                      data-aos='fade-up'
                      data-aos-duration="2000"
                      data-aos-once="true">

                        <img className='imgServices pt-3 mb-3'  src={beauty}/>
                        <p className='fw-bold pb-2' style={{color:'#491D4D'}}>Stores</p>
                    </div>
                </div>
              
             
                <div className='col-md-1 col-lg-1 col-xl-1 col-xxl-1'>
</div>
            </div>
        </div>
      </div>
    </div>
  )
}
