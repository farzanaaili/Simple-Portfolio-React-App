import "./Navbar.css"
import React, { useState } from 'react'

import { Link } from "react-scroll"

import {FaBars, FaTimes} from "react-icons/fa"



const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick =() => setClick(!click);

    const [color, setColor]=useState(false);
    const changeColor =() => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scrollY", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"} >
        <Link className="logo" spy={true} smooth={true} to="home">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
           
                <Link spy={true} smooth={true} to="home" activeClass="active">
                <li>Home </li></Link>
            
            
                <Link spy={true} smooth={true} to="project"><li>Project</li></Link>
            
            
                <Link spy={true} smooth={true} to="about"><li>About</li></Link>
            
            
                <Link spy={true} to="contact" smooth={true} ><li>Contact</li></Link>
            
        </ul>
        <div className="hamburger " onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}} />) : ( <FaBars  size={20} style={{color:"#fff"}} />) }
            
           
        </div>
    </div>
  )
}

export default Navbar