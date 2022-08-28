import "./About.css"
import React from 'react'
import react1 from "../images/hero.jpg"
import react2 from "../images/demo1.png"
import { Link } from "react-scroll"

const About = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I</h1>
            <p>
                I'm React Font-End Developer. I create responsive secure websites for any clients.
            </p>
            <Link spy="true" smooth="true"  to="contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About