import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HooksFetchData() {

    const [data, setData] = useState({})
    const [id, setId] = useState(1)
    const [buttonId, setButtonId] = useState(1)

    const handleClick = () => {
        setButtonId(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`).then(res => {
            console.log(res)
            setData(res.data)
        })
            .catch(err => {
                console.log(err)
            })
    }, [buttonId])


    return (
        <div>
            <input value={id} onChange={(e) => setId(e.target.value)}></input>
            <button onClick={handleClick}>Click</button>
            <div>
                {data.title}
            </div>
            {/* {data.map(d => (<li key={d.id}>{d.title}</li>))} */}
        </div>
    )
}

export default HooksFetchData
