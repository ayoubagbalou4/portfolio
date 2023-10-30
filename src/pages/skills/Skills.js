import React from 'react'
import "./Skills.css"
import TechnicalSkillCard from '../../components/TechnicalSkillCard'
import ProfessionalSkillCard from '../../components/ProfessionalSkillCard'

const Skills = () => {
  return (
    <div className='skills'>
        <div className='technical-skills'>
            <h2>Technical Skills</h2>
            <div className='skills-items'>
                <TechnicalSkillCard skill="HTML & CSS" percentage="95" />
                <TechnicalSkillCard skill="JAVASCRIPT" percentage="98" />
                <TechnicalSkillCard skill="REACT" percentage="96" />
                <TechnicalSkillCard skill="LARAVEL" percentage="94" />
                <TechnicalSkillCard skill="PHP" percentage="97" />
                <TechnicalSkillCard skill="MYSQL & MONGODB" percentage="93" />
            </div>
        </div>

        <div className="professional-skills">
            <h2>Professional Skills</h2>
            <div className='soft-skills'>
                <ProfessionalSkillCard skill="Communication" percentage="90" />
                <ProfessionalSkillCard skill="Team Work" percentage="85" />
                <ProfessionalSkillCard skill="Project Mangement" percentage="95" />
                <ProfessionalSkillCard skill="Creativity" percentage="98" />
            </div>
        </div>
    </div>
  )
}

export default Skills