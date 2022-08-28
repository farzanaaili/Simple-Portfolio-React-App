import "./Footer.css"
import React from 'react'
import {
    FaHome,
    FaPhone, 
    FaMailBulk, 
    FaFacebook,
    FaTwitter,
    FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem" }} />
                    <div>
                        <p>123 Housing Society.</p>
                        <p>Bangladesh.</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }} />1-2323-254765-56</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }} />techdsf@gmail.com</h4>
                
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>
                    This is me Farzana Akter.React developer in "TechDsf.com" . I enjoy discussing new Projects and design challenges.
                </p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff", marginRight:"2rem" }} />
                <FaTwitter size={20} style={{color:"#fff", marginRight:"2rem" }} />
                <FaLinkedin size={20} style={{color:"#fff", marginRight:"2rem" }} />
                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer