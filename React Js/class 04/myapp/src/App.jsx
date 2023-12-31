// import React, { useState } from "react"
// import Header from "./components/Header"
// import Footer from "./components/Footer"

// const App = () => {

//   // var userName = "Jaffar"
//   // let state = useState("Jaffar")
//   // console.log(state,
//   //   "state")
//   // const updateName = (name) => {
//   //   // userName = "Jaffar Aman"
//   //   state[1]("jaffar aman")
//   //   // document.getElementById("h1").innerHTML = userName
//   // }

//   // console.log(userName)

//   // let [stateValue, stateFunction] = useState("Jaffar AMAN")
//   const [userName, setUserName] = useState("Jaffar")
//   console.log(userName)

//   const updateValue = () => {
//     setUserName("ALI")
//   }



//   console.log("hello world")



//   return (
//     // <React.Fragment>
//     <>
//       <Header
//         name={userName}
//       />
//       {/* <div>
//         <h1 id="h1"> {state[0]}  </h1>
//         <button
//           onClick={() => {
//             updateName("jaffar aman")
//           }

//           }
//         // onClick={updateName}
//         >UPDATE NAME</button>
//       </div> */}

//       <h1>HELLO REACT!</h1>

//       <h1>  {userName} </h1>
//       <button onClick={updateValue} >UPDATE</button>
//       <Footer />
//     </>
//     // </React.Fragment>
//   )
// }



// // header component 





// export default App



import React, { useState } from 'react'

const App = () => {

  const getData = (value) => {
    console.log("value=========> ", value)
  }

  return (
    <>

      {/* <UserName name="ALI" />
      <UserName name="Jaffar" />
      <UserName name="Faraz" /> */}


      <UserName getData={getData} />
      {/* <button onClick={getData} >GET DATA</button> */}


    </>
  )
}


const UserName = ({ getData }) => {
  const [childValue, setChildValue] = useState("Child value")

  return (
    <>
      <h1> {name}   </h1>
      <button onClick={() => getData(childValue)} >CLICK</button>
    </>
  )
}

export default App