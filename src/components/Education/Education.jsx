import React from 'react'
import "./_Education.scss"

const Education = ({ education }) => {
    return (
        <div className='education_part'>
            {education.map((item) => {
                return (
                    <div className='education_part__item' key={JSON.stringify(item)}>
                        <p className='name'>{item.name}</p>
                        <p> {item.site} </p>
                        <p> {item.date} </p>
                        <p> {item.site} </p>
                        <p> {item.description} </p>
                    </div>

                )
            })}

        </div>

    )
}

export default Education