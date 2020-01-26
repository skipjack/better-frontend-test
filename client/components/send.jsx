import React from 'react'

/**
 * Displays an icon for sending a message
 * 
 * @param  {object} props - No props currently supported
 * @return {object}       - React markup
 */
const Send = props => (
    <svg
        width={ 24 }
        height={ 28 }
        viewBox="0 0 32 40"
    >
        <path
            d="M4,4l2.7,10c0.2,0.6,0.7,1,1.3,1l15.3,1L8,17c-0.6,0-1.2,0.5-1.3,1.1L4,28l24-12L4,4z"
            style={{ fill: 'currentColor' }}
        />
    </svg>
)

export default Send