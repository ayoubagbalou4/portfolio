import React from 'react'
import "./Services.css"
import {FaCode} from "react-icons/fa"
import {FaLaptopCode} from "react-icons/fa"
import {LuSearchCode} from "react-icons/lu"
import Card from '../../components/Card'

const Services = () => {
  return (
    <div className='services'>
        <h1>WEB DEVELOPER</h1>
        <h3>Get creative and enjoy the most dedicated web development services from Ayoub.</h3>
        <div className='service-cards'>
            <Card icon={<FaCode size={40} />} title="Full-Stack" description="As a Full-stack marketing and development agency. We provide creative and technical solutions for a range of business needs" />
            <Card icon={<FaLaptopCode size={40} />} title="Web Development" description="We Build Websites For Your Needs. Whether you're a business, organization, or an individual looking for a website." />
            <Card icon={<LuSearchCode size={40} />} title="SEO Marketing" description="We know the ins and outs of SEO. We can help you to rank your website better and produce more visitors." />
        </div>
    </div>
  )
}

export default Services