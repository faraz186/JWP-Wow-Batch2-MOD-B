import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {


    const params = useParams()
    console.log(params)
    let [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams.get("name"))
    console.log(searchParams.get("id"))

    return (
        <div>
            <h1>User PAGE</h1>
        </div>
    )
}

export default User
