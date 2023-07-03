import React from 'react'
import '../Style/MyStyle.css';
import 'font-awesome/css/font-awesome.min.css';
export default function ContactUs() {
  return (
    <div>
      <div className='container-fluid' id="ContactUS" style={{backgroundColor:'#491D4D66'}}>
        <div className='container pt-5'>
            <h2 className='text-center text-white mb-5 '
               data-aos='zoom-in'
               data-aos-duration="2000"
               data-aos-once="true">Contact Us</h2>

            <div className='row'>
            <form    data-aos='fade-up'
              data-aos-duration="2000"
              data-aos-once="true">
            <div className='row g-4'>
            <div className='col-lg-6 col-xl-6 col-xxl-6'>
          <div className="left-inner-addon ">
            <i className="fa fa-user" style={{fontSize:18}}></i>
            
            <input type="text"
                   className="form-control input" 
                   placeholder="Full Name" />
        </div>
      
         
            </div>
            <div className='col-lg-6 col-xl-6 col-xxl-6'>
          <div className="left-inner-addon ">
            <i className="fa fa-envelope"></i>
         
            <input type="email"
                   className="form-control input" 
                   placeholder="Email" />
        </div>
       
         
            </div>
          <div className=" ">

            <i className='bx bxs-message ' style={{fontSize:18}}></i>
                   <textarea className='form-control px-2  textarea' placeholder='Message...'></textarea>
                   </div>
                   </div>

<div className='text-center mt-4 mb-4'
data-aos='fade-down'
data-aos-duration="2000"
data-aos-once="true"
>
                       <button className='btn text-center text-white   px-5 py-2'type='submit'
                        style={{borderRadius:50,backgroundColor:'#491D4D'}}>Send</button>
                       </div>

               </form>
               
            </div>
        </div>
       
      </div>

      <div className='container-fluid' style={{backgroundColor:'#491D4D'}}>
      <footer className='text-center py-4'>
            <div className="ms-3 d-flex" style={{justifyContent:'center'}}>
                        <a className="btn btn-sm-square btn-light rounded-circle text-center  ms-3 me-3" href="#">
            <i className='bx bxl-instagram-alt text-center mx-auto px-auto'
                 style={{color:'#491d4d',fontSize:30,}} ></i>
                   </a>
                  <a className="btn btn-sm-square btn-light rounded-circle text-center  ms-3 me-3" href="#">
                <i className="fa fa-linkedin" aria-hidden="true"  
                  style={{color:'#491d4d',fontSize:24,}} ></i></a>
                        <a className="btn btn-sm-square btn-light  rounded-circle text-center  ms-3 me-3" href="#">
                        <i className="fa fa-twitter" aria-hidden="true"  
                           style={{color:'#491d4d',fontSize:27,}}></i></a>
                        <a className="btn btn-sm-square btn-light  rounded-circle text-center  ms-3 me-3" href="#">
                        <i className="fa fa-facebook" aria-hidden="true"    
                         style={{color:'#491d4d',fontSize:24,}}></i></a>
                          
                    </div>

        </footer>
      </div>
    </div>
  )
}
