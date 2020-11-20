import React, { useState } from 'react'

function HookStateObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <input value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })}></input>
            <input value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })}></input>
            First name-{name.firstName}
            Last name-{name.lastName}
        </div>
    )
}

export default HookStateObject
