import React, { useState } from "react"
import BulbOn from "./assets/bulbon.jpg"
import BulbOff from "./assets/bulboff.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from "./components/Header";

const App = () => {

  const [bulbOn, setBulbOn] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  // if (BulbOn) {
  //   return (
  //     <img src="" alt="" />
  //   )
  //   //nsole.log("on")

  // } else {
  //   return (
  //     <img src="" alt="" />
  //   )
  // }

  // var temp  = "K" || "Jaffar"

  var arr = ["Jaffar", "Sufiyan", "Bilal"]
  // var arr = null
  // var arr = null || []
  // for (var i = 0; i < arr.length; i++) {
  //   return (
  //     <li>{arr[i]}</li>
  //   )
  // }

  return (
    <>
      {/* {

        bulbOn ?
          <img src={BulbOn} width={200} height={200} />
          : <img src={BulbOff} width={200} height={200} />

      } */}
      {/* <button onClick={() => {
        setBulbOn(true)
      }} >BULB ON</button>
      <button onClick={() => {
        setBulbOn(false)
      }} >BULB OFF</button> */}

      {/* {
        isLoggedIn ?
          <div>
            <h1>WELCOME USER</h1>
            <h1>DASHBOARD!</h1>
            <h1>USER NAME</h1>
          </div>
          : null
      } */}
      {/* <h1>APP</h1>
      {
        isLoggedIn &&
        <div>
          <h1>WELCOME USER</h1>
          <h1>DASHBOARD!</h1>
          <h1>USER NAME</h1>
        </div>

      } */}


      {/* {
        isLoggedIn ? <button onClick={() => {
          setIsLoggedIn(false)
        }} >LOGOUT</button> :
         <button onClick={() => {
          setIsLoggedIn(true)
        }} >LOGIN</button>
      } */}

      {/* <button onClick={() => {
        setIsLoggedIn( !isLoggedIn  )
      }}>   {isLoggedIn ? "Logout" : "Login"}   </button> */}


      <h1>REACT LIST</h1>

      {/* {
        arr && arr.map((value, index) => {
          return (
            <li key={index} > {value}   </li>
          )
        })
      } */}

      <Header />
      <select name="" id="">
        {
          arr && arr.map((value, index) => {
            return (
              <option key={index} > {value}   </option>
            )
          })
        }
      </select>

      <Button> CLICk </Button>
    </>
  )
}

export default App