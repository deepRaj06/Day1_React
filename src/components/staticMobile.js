import React, { useState } from 'react'


let Heading = ({head}) => {
    const [headStyle] = useState({
        color: 'black',
        fontWeight: 'bold',
    
    })

    return <h2 style={headStyle}>{head}</h2>
}

export default Heading;