import React from 'react'
import "./Footer.css"
import {BiChevronRight} from "react-icons/bi"
import {MdLocationPin , MdEmail} from "react-icons/md"
import {BsFillTelephoneFill,BsFacebook,BsInstagram,BsWhatsapp,BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
        <div class="footer-item">
            <div class="item">
                <h2>AYOUB AGBALOU</h2>
                <div><MdLocationPin /> 123 Street, New York, USA</div>
                <div><BsFillTelephoneFill /> +212 613752599</div>
                <div><MdEmail /> ayoubagbalou4@gmail.com</div>
                <div class="social-media">
                    <a href="#"><BsFacebook /></a>
                    <a href="#"><BsInstagram /></a>
                    <a href="#"><BsWhatsapp /></a>
                    <a href="#"><BsTwitter /></a>
                </div>
            </div>
            <div class="item">
                <h2>Services</h2>
                <div><a href="#"><BiChevronRight /> Full-Stack</a></div>
                <div><a href="#"><BiChevronRight /> Web Development</a></div>
                <div><a href="#"><BiChevronRight /> SEO Marketing</a></div>
            </div>
            <div class="item">
                <h2>Quick Links</h2>
                <div><a href="#"><BiChevronRight /> About Us</a></div>
                <div><a href="#"><BiChevronRight /> Services</a></div>
                <div><a href="#"><BiChevronRight /> Projects</a></div>
                <div><a href="#"><BiChevronRight /> Contact</a></div>
            </div>
            <div class="item">
                <h2>Newsletter</h2>
                <div class="input">
                    <input type="text" placeholder="Your Email" />
                    <button>SignUp</button>
                </div>
            </div>
        </div>
        <p>All Right Reserved &copy; By Agbalou</p>
    </footer>
  )
}

export default Footer