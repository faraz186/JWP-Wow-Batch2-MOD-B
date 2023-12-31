import React from "react"


const Header = (props) => {

    console.log(props, "props")
    return (
        <div>
            <h1>HEADER</h1>
            {/* {userName} */}
            <h1> {props.name}  </h1>
        </div>
    )
}


export default Header