import React, { useState } from 'react'


let Heading = ({head, list1, list2, list3, list4}) => {
    // const [headStyle] = useState({
    //     color: 'black',
    //     fontWeight: 'bold',
    
    // })

    return (
        <div className="container">
    <h2>{head}</h2>
    <ul>
        <li>{list1}</li>
        <li>{list2}</li>
        <li>{list3}</li>
        <li>{list4}</li>
    </ul>
    </div>)
}

export default Heading;