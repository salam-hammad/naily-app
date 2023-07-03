import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png';
import us from '../Images/US.png';
import 'font-awesome/css/font-awesome.min.css';
import {react,useEffect,useState} from'react';

function BasicExample() {
  
  useEffect(()=>{
    const oldtoggle= document.getElementById('oldtoggle');
    const newtoggle= document.getElementById('newtoggle');

      oldtoggle.addEventListener('click', () => {
      oldtoggle.classList.remove("d-block");
      oldtoggle.classList.add("d-none");
      newtoggle.classList.remove("d-none");
      newtoggle.classList.add("d-block");
      console.log("alaaaa");

    });
    
    newtoggle.addEventListener('click', () => {
      newtoggle.classList.remove('d-block');
      newtoggle.classList.add('d-none');
      oldtoggle.classList.remove('d-none');
      oldtoggle.classList.add('d-block');

    });

 },[]);


  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{borderRadius:50}}>
      <Container className="px-4">
        <Navbar.Brand href="/"><a href='/'><img src={logo}  style={{width:50}}/></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='' id="oldtoggle"/>
        <Navbar.Toggle className="d-none" id="newtoggle"><i className="fa fa-close " style={{fontSize:18}}></i></Navbar.Toggle>


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" me-auto mb-2 mb-lg-0 mx-lg-auto">
            <Nav.Link href="/" className="me-3 mx-3">Home</Nav.Link>
            <Nav.Link href="#AboutUs" className="me-3 mx-3">About Us</Nav.Link>
            <Nav.Link href="#Services" className="me-3 mx-3">Services</Nav.Link>
            <Nav.Link href="#ContactUS" className="me-3 mx-3">Contact Us</Nav.Link>         
          </Nav>
          <img src={us} style={{width:37}}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;