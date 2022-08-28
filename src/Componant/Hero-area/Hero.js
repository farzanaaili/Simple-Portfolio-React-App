import "./Hero.css"
import React from 'react'
import IntoImg from "../images/hero.jpg"
import { Link } from "react-scroll"


const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
          <img className="into-img" src={IntoImg} alt="IntoImg"></img>
        </div>
        <div className="content">
          <p>HI, I'm Farzana Akter</p>
          <h1>React Developer.</h1>
          <div>
            <Link spy="true" smooth="true" to="project" className="btn">PROJECTS</Link>
            <Link spy="true" smooth="true" to="contact" className="btn btn-light">CONTACT</Link>
          </div>
        </div>
    </div>
  )
}

export default Hero