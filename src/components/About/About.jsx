import React from 'react'
import './_About.scss'


const About = ({ about }) => {
    return (
        <div className='about'>
            <h2>Sobre mi</h2>
            <p>{about}</p>


        </div>
    )
}

export default About