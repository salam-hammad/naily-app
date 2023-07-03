import logo from './logo.svg';
import './App.css';
import i18n from 'i18next';
import {react,useEffect} from'react';
import Index from './Components/Index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import './Style/Cursorstyle.css';
export default function App() {
  useEffect(() => {
    AOS.init();

    const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
      cursor.classList.remove("expand");
  }, 500)
})
  }, [])

  return (
    <div>
      <div className='cursor'></div>
     
<Index/>
    </div>
  
  )
  
}


