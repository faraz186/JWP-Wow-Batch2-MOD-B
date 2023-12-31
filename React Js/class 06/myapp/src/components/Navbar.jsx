import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    {/* <a href="/">

                        Home
                    </a> */}

                    <Link to={"/"} >Home</Link>
                </li>
                <li>
                    {/* <a href="/about">

                        About
                    </a> */}
                    <Link to={"/about"} >About</Link>

                </li>
                {/* <li>Contact</li> */}
                <li>

                    <Link to={"/contact"} >Contact</Link>
                </li>

            </ul>

        </div>
    )
}

export default Navbar
