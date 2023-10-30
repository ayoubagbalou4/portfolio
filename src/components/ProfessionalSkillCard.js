import React from 'react'

const ProfessionalSkillCard = (props) => {
  return (
    <div className='item'>
        <div className='titles'>
            <h4>{props.skill}</h4>
            <h4>{props.percentage}%</h4>
        </div>
        <div className='lignes'>
            <div className='ligne' style={{width:`${props.percentage}%`}}></div>
        </div>
    </div>
  )
}

export default ProfessionalSkillCard