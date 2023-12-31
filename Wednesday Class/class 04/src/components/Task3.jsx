import React, { useState } from 'react'

const Task3 = () => {

    let time = new Date().toLocaleTimeString();
    const [Currenttime,setCurrenttime] = useState(time)

    const updateTime = ()=>{
        let time = new Date().toLocaleTimeString();
        setCurrenttime(time)
    }
    setInterval(updateTime,1000);
    
  return (
    <div>
        <h1>{Currenttime}</h1>
    </div>
  )
}

export default Task3