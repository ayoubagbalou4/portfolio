import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <div class="projects">
        <h1>LATEST WORK</h1>
        <h3>My Portfolio</h3>
        <div class="projects-items">
            <div class="project-item">
                <div class="project-image">
                    <img src="./images/everyimg.png" alt="" />
                </div>
            </div>
            <div class="project-item">
                <div class="project-image">
                    <img src="./images/primg.png" alt="" />
                </div>
            </div>
            <div class="project-item">
                <div class="project-image">
                    <img src="./images/blogimg.png" alt="" />
                </div>
            </div>
            <div class="project-item">
                <div class="project-image">
                    <img src="./images/productmangemt.png" alt="" />
                </div>
            </div>
            <div class="project-item">
                <div class="project-image">
                    <img src="./images/webgenuis.png" alt="" />
                </div>
            </div>
            <div class="project-item">
                <div class="project-image">
                    <img src="./images/project1.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects