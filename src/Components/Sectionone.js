import React, { Component,useEffect } from 'react'
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import '../Style/MyStyle.css';
import BasicExample from './BasicExample';

export default function Sectionone() {

  return (
    <div>
   <div className='container-fluid pt-5 parentdivone' id="relative_container">
    <div className='container ' style={{marginBottom:77}}>
      {/* <NavBar/> */}
<BasicExample/>
    </div>
    <div className='container  ' >
    <div className='text-center text-white' 
    data-aos='zoom-in'
    data-aos-duration="2000"
    data-aos-once="true"
    
>
<h4>Nilay App</h4>
<h4>for Beauty Services</h4>
<button className='btn px-3 py-1 mt-4' style={{backgroundColor:'#491D4D',borderRadius:22,color:'#fff',marginBottom:77}}> JOIN US</button>
</div>
   
    </div>

    <div className='container '  id="absolute_container">
<div className='row g-3 px-5  ' 
  data-aos='fade-up'
  data-aos-duration="2000"
  data-aos-once="true"
>
<div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
  <div className='bg-white text-center h-100  shadow-sm' style={{borderRadius:40}}>
    <img className='imgg  pt-4' src={img1}/>
    <p className='fw-bold mt-2'>High quality products</p>
    <p  className='mt-2 pb-3'>Beauty products store</p>
  </div>
</div>

<div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
  <div className='bg-white text-center  h-100  shadow-sm' style={{borderRadius:40}}>
    <img className=' imgg pt-4' src={img2}/>
    <p className='fw-bold mt-2'>Register as a service provider</p>
    <p  className='mt-2 pb-3'>You can provide services</p>
  </div>
</div>
<div className='col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
  <div className='bg-white text-center h-100 px-md-2 shadow-sm' style={{borderRadius:40}}>
    <img className='imgg  pt-4' src={img3}/>
    <p className='fw-bold mt-2'>Book services</p>
    <p  className='mt-2 pb-3'>You can book beauty services </p>
  </div>
</div>
</div>
</div>
   </div>


 
   </div>
  )
}

