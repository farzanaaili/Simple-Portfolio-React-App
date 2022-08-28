import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div id='contact'>
      <div style={{textAlign:"center",
    fontSize: "30px",
    fontWeight: "500",
    paddingBottom: "1rem" }}>
       <h1 style={{textDecoration:"underline"}}>Contact.</h1>
       <h4>Chat with me</h4>
       </div>
       
       <form>
            <label>Your Name</label>
            <input placeholder="Type your name" type="text"></input>
            <label>Email Address</label>
            <input placeholder="Type your email address" type="email" required></input>
            <label>Subject</label>
            <input placeholder="Type the subject" type="text"></input>
            <label>Massage</label>
            <textarea rows="6" placeholder="Type your massage here."> </textarea>
            <button className="btn">Submit</button>
        </form>
    
    </div>
  )
}

export default Contact