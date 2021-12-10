import React from 'react'; 

export default function ProfileComponent (props) {
    return (
        <div>
            <h1>{props.fullName}</h1>
            <h3>{props.bio}</h3>
            <h3>{props.profession}</h3>
            {props.children}          
        </div>
    )
}
