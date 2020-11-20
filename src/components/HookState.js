import React, { useState } from 'react'

function HookState() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)
    return (
        <div>
            Count {count}
            <button className="btn btn-success" onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button className="btn btn-success" onClick={() => setCount(initialValue)}>Reset</button>
            <button className="btn btn-success" onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    )
}

export default HookState
