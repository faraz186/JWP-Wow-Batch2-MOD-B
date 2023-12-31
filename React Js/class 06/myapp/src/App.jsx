import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './pages/about'
import Contact from './pages/Contact'
import Home from './pages/HOme'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import User from './pages/User'

function App() {
  const [count, setCount] = useState(0)
  const [isToggle, setIsToggle] = useState(false)
  function foo() {
    console.log("first time render")
  }



  // useEffect(() => {
  //   foo()
  //   // console.log("first time")
  // }, [])


  // useEffect(() => {
  //   foo()
  // },)
  return (
    <>
      {/* <h1>HELLO REACT</h1> */}
      {/* <Home />
      <About />
      <Contact /> */}
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> */}

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/user/:name' element={<User />} /> */}
        <Route path='/user' element={<User />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>


      {/* http://localhost:5173/user?name=jaffar */}

      {/* <h1>HELLO WORLD</h1>
      <button onClick={() => setIsToggle(!isToggle)} >CLICK</button> */}
    </>
  )
}

export default App
