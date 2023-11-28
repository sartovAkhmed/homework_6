import React from 'react'; 

export const User = ({title, body, userId}) => {
    return (
        <div>
            <div className='block__user'>
                <h2>{userId}</h2>
                <h3>{title}</h3>
            </div>
            <p>{body}</p>
        </div>
    )
}