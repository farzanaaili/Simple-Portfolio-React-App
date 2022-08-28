import "./Pricing.css"
import React from 'react'
import { Link } from "react-router-dom"

const Pricing = () => {
  return (
    <div className="pricing">
        <h1 style={{textAlign:"center",
    fontSize: "50px",
    fontWeight: "500",
    paddingBottom: "4rem", textDecoration:"underline"}}>You can  buy from here</h1>
        <div className="card-container">
        
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>-3days-</p>
                <p>-3days-</p>
                <p>-Fetured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">
                  Purchase Now
                </Link>

            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>-2 days-</p>
                <p>-5 pages-</p>
                <p>-Fetured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">
                  Purchase Now
                </Link>

            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>-5 days-</p>
                <p>-8 pages-</p>
                <p>-Fetured-</p>
                <p>-Responsive Design-</p>
                <Link to="/contact" className="btn">
                  Purchase Now
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Pricing