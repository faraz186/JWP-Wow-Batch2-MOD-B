import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        console.log("first time home page")

        return () => {
            console.log("unmount")
        }

    }, [])

    return (
        <div>
            <h1>Home PAGE</h1>
        </div>
    )
}

export default Home
