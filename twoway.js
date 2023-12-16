import React, { useState } from 'react' 
export default function Twoway()
{
    const[name,setName]=useState("")
    const changeName=(event)=>setName(event.target.value)
    return (
        <div>
            Twoway
            <input onChange ={changeName} value={name}></input>
            <p>the name is {name}</p>
        </div>
    )
}