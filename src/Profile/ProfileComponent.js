import React from 'react'; 

export default function ProfileComponent (props) {
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h3>{props.bio}</h3>
            <h3>{props.profession}</h3>
            <img src={props.children} className='the pic' alt="bobby handy man" />
            <button onClick={props.handle}>ayja lena</button>         
        </div>
    )
}
