import React from 'react'
import "./Contact.css"
import {AiFillProject , AiOutlineFundProjectionScreen} from "react-icons/ai"
import {FaUsers} from "react-icons/fa"

const Contact = () => {
  return (
    <div class="contact">
        <div class="left-side-contact">
            <div class="image">
                <img src="./images/plusi-removebg-preview.png" alt="image" />
            </div>
            <div class="stat">
                <div class="card-stat">
                    <h1><FaUsers /></h1>
                    <h3>520+</h3>
                    <p>Customers</p>
                </div>
                <div class="card-stat">
                    <h1><AiFillProject /></h1>
                    <h3>53+</h3>
                    <p>Projects</p>
                </div>
                <div class="card-stat">
                    <h1><AiOutlineFundProjectionScreen /></h1>
                    <h3>120+</h3>
                    <p>Works</p>
                </div>
            </div>
        </div>
        <div class="right-side-contact">
            <h2>Get Touch Me</h2>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Phone Number" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact