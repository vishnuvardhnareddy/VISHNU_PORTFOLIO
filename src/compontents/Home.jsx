import React from 'react';
import { FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import pic from '../assets/picc.jpg';
import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className="text">
                <h1>Hello, I'm Vishnu</h1>
                <p>
                    I am a Full Stack Developer with expertise in Node.js, Spring Boot, and React,
                    along with hands-on experience in many front-end technologies.
                    Currently, I work at a startup as both a developer and team leader at the Renu Sharma Foundation.
                    I also have good problem-solving skills and a clear understanding of Data Structures in Java.
                </p>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                    <FaMapMarkerAlt style={{ color: 'red' }} title="Location" />
                    <p>Hyderabad, India</p>
                </div>

                {/* Social Icons */}
                <div style={{ display: 'flex', gap: '20px', fontSize: '24px', marginTop: '15px' }}>
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/your-linkedin-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                    >
                        <FaLinkedin style={{ color: '#0077B5' }} />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/your-github-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                    >
                        <FaGithub style={{ color: 'white' }} />
                    </a>
                </div>
            </div>
            <div className="image">
                <img src={pic} alt="Profile" />
            </div>
        </div>
    );
}

export default Home;
