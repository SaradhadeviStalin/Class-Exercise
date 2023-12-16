import React from 'react'
export default function List()
{
    const college=[{id:1, stuName:"Honda Toru", age:18},
            {id:2, stuName:"Kyo", age:20},
            {id:3, stuName:"Yuki", age:20},
            {id:4, stuName:"Momiji", age:17},
            {id:5, stuName:"Shigure", age:32},]
        
            const display=college.map((col)=><li key={col.id}>{col.stuName} {col.age}</li>)
            return(
                <div>
                    <h1>List of Students</h1>
                    {display}
                </div>
            )
}