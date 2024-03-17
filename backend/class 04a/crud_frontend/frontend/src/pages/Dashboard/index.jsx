import React from "react"
import { useLocation } from "react-router-dom"


const Dashboard = () => {

    const location = useLocation()
    console.log(location, "location")
    return (
        <h1>HELLO WORLD</h1>
    )
}

export default Dashboard