import React, { useState, useEffect } from 'react'

function HooksUseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("Update Doc")
        document.title = `Count + ${count}`
    }, [count])
    return (
        <div>
            <input value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HooksUseEffect
