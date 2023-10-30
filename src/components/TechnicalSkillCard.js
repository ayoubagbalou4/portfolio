import React from 'react'

const TechnicalSkillCard = (props) => {
  return (
    <div className="container">
        <div className="circular-progress" style={{background: `conic-gradient(#F60909 ${props.percentage}%, #ededed 0%)`}}>
            <span className="progress-value">{props.percentage}%</span>
        </div>
        <span className="text">{props.skill}</span>
    </div>
  )
}

export default TechnicalSkillCard