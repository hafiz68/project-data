import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import {BsArrowUpSquareFill} from 'react-icons/bs'
import { Button} from './Styles';
import "./scrollButton.css"
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 100){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div>
    <Button>
     <BsArrowUpSquareFill onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
    </div>
  );
}
  
export default ScrollButton;