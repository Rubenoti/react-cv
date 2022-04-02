import React from 'react'
import "./_Experience.scss"
const Experience = ({ experience }) => {
    return (
        <div className='experience_part'>
            {experience.map((item) => {
                return (
                    <div className='experience_part__item' key={JSON.stringify(item)}>
                        <p className='name'>{item.name}</p>
                        <p>{item.site}</p>
                        <p>{item.date}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Experience