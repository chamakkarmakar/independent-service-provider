import React from 'react';
import mypic from '../../img/mypic.jpg';
import './About.css';

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div className="about-me">
                <div className='details about-half'>
                    <h3>Chamak Karmakar</h3>
                    <p>I'm looking for an opportunity to grow
                        myself and develop my skill as well. As a
                        computer science graduate, I am a tech
                        enthusiast and have good command over
                        programming language. My passion for
                        working as a full stack developer has driven me
                        to acquire new knowledge about web
                        development and it methodologies.</p>
                </div>
                <div className='picture about-half'>
                    <img src={mypic} alt="mypic" height={300} width={300} />
                </div>
            </div>
        </div>
    );
};

export default About;