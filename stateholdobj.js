import React,{ useState }from 'react'
export default function StateHoldObjects(){
    const[college,setCollege]=useState({cid: 1,cname:"Sri Krishna",year:2023})
    const changeDemo=()=>{
        setCollege((prevState)=>{return{...prevState,cname:"KumaraGuru"}})
    }
    return(
        <div>
            <h1>College Id is {college.cid}</h1>
            <h1>College name is {college.cname}</h1>
            <h1>Year {college.year}</h1>
            <button onClick={changeDemo}>ChangeYear</button>
        </div>
    )
}