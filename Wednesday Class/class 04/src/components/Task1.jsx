import React from 'react'

const Task1 = () => {
    let time = new Date().toLocaleDateString();
  let date = new Date().toLocaleTimeString();

  let userName = "faraz"
  return (
    <div>
        <h1>Hello My name is {userName}</h1>

<p>Current Date: {date}</p>

<p>Current Date: {time}</p>
    </div>
  )
}

export default Task1