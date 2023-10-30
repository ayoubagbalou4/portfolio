import React, { useState } from 'react'
import "./Nav.css"
import {FiMenu} from "react-icons/fi"
import {AiOutlineClose} from "react-icons/ai"

const Nav = () => {
  const [active,setActive] = useState(false)

  return (
    <div>
        <header>
            <h2>Ayoub <span>Agbalou</span></h2>
            {
              active ? 
              <>
              <h2 onClick={() => setActive(false)} className='close'><AiOutlineClose  color='#F60909'/></h2>
              <div className="menu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
              </div>
              </>
              :
              <h2 onClick={() => setActive(true)} className='icon'><FiMenu  color='#F60909'/></h2>
            }
        </header>
    </div>
  )
}

export default Nav
{/* <div className="menu">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </div> */}