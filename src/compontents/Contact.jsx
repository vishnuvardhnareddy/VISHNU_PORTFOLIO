import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css'; // Assuming you have a Contact.css for styling

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <p>
                <MdEmail /> Email: <a href="mailto:vr4507@gmail.com">vr4507@gmail.com</a>
            </p>
            <p>
                <MdPhone /> Phone: +91-9391512635
            </p>
            <p>
                <FaLinkedin /> LinkedIn:{' '}
                <a
                    href="https://www.linkedin.com/in/vishnu-vardhan-reddy-manda-755890282/overlay/about-this-profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin.com/in/vishnu-vardhan-reddy-manda
                </a>
            </p>
            <p>
                <FaGithub /> GitHub:{' '}
                <a
                    href="https://github.com/vishnuvardhnareddy"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/vishnuvardhnareddy
                </a>
            </p>
        </div>
    );
}


export default Contact;
