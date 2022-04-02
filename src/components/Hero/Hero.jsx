import React from 'react'
import "./_Hero.scss"
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
const Hero = ({ hero }) => {
    return (
        <div className='hero'>
            <img src={hero.image} alt={hero.name} />
            <h2> {hero.name} {hero.surname}</h2>
            <div className='hero__content'>
                <h4>Contact and direction</h4>
                <p>{hero.addres}</p>
                <p>{hero.city} {hero.country}</p>
                <p>{hero.phone}</p>
                <div className='hero__content__social'>
                    <a href={"mailto:" + hero.email}><GrMail /></a>
                    <a href={hero.gitHub}><AiFillGithub /></a>
                    <a href={hero.linkedin}><AiFillLinkedin /></a>
                </div>
            </div>
        </div>
    )
}

export default Hero