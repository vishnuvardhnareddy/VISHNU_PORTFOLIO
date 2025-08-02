import React from 'react';
import gitIcon from '../assets/github.png';
import reactIcon from '../assets/react.png';
import springBootIcon from '../assets/springboot.svg';
import sqlIcon from '../assets/mysql.png';
import nodeIcon from '../assets/node.png';
// import mongoIcon from '../assets/mongodb.png';
import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>

            {/* Driver_Locker */}
            <div className="project-item">
                <h2>Driver_Locker</h2>
                <p>
                    A full-stack application where users can register and store files. Includes a private folder with secret code access. Features include file upload, secure access, and role-based permissions.
                </p>
                <p>Date: July 2025</p>
                <div className="project-links">
                    <a href="https://github.com/vishnuvardhnareddy/DRIVE_lOCKER">
                        <img src={gitIcon} alt="GitHub" width="20" height="20" /> GitHub
                    </a>
                </div>

                {/* Tech Stack */}
                <div className="tech-stack">
                    <div>
                        <img src={reactIcon} alt="React" title="React.js" />
                        <span>React.js</span>
                    </div>
                    <div>
                        <img src={springBootIcon} alt="Spring Boot" title="Spring Boot" />
                        <span>Spring Boot</span>
                    </div>
                    <div>
                        <img src={sqlIcon} alt="SQL" title="SQL Database" />
                        <span>SQL</span>
                    </div>
                </div>
            </div>

            <br />

            {/* NewsPage */}
            <div className="project-item">
                <h2>NewsPage</h2>
                <p>
                    A personalized news site built with React.js and Node.js. Users can register, log in, and customize news content by category.
                </p>
                <p>Date: March 2025</p>
                <div className="project-links">
                    <a href="https://github.com/S-Gangadhar-tech/NewsPage">
                        <img src={gitIcon} alt="GitHub" width="20" height="20" /> GitHub
                    </a>
                </div>

                {/* Tech Stack */}
                <div className="tech-stack">
                    <div>
                        <img src={reactIcon} alt="React" title="React.js" />
                        <span>React.js</span>
                    </div>
                    <div>
                        <img src={nodeIcon} alt="Node.js" title="Node.js" />
                        <span>Node.js</span>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Projects;
