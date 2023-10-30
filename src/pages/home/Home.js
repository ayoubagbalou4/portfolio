import React from 'react'
import Nav from '../../components/nav/Nav'
import "./Home.css"
import {HiDownload} from "react-icons/hi"

const Home = () => {
  return (
    <div className='home'>
        <Nav />
        <div className="content">
            <div className="left-side">
                <h1>hi, i'm ayoub! <br/> creative <span>full stack developper</span> </h1>
                <p>I'm a passionate and versatile full-stack developer with a strong background in both front-end and back-end technologies. I have a deep love for creating innovative solutions to real-world problems and constantly strive to learn and adapt to new technologies and industry trends.</p>
                <button>Download Cv <HiDownload /> </button>
            </div>
            <div className="right-side">
                <img src="./images/Pair programming-amico.svg" alt="hh" />
            </div>
        </div>
    </div>
  )
}

export default Home