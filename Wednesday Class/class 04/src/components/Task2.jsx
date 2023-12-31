import React from 'react'

const Task2 = () => {
    
  let date = new Date().getHours();
  let message = "";

  if(date>=1 && date<12)
  {
    message = "Good Morning.."
  }
  else if(date >=12 && date < 19)
  {
    message = "Good Afternoon.."
  }
  else{
    message = "Good Night.."
  }
  return (
    <div>
      <h1>Hello sir {message}</h1>
    </div>
  )
}

export default Task2