import React from 'react'
import { tether } from '@triframe/designer'

const UserDetails = tether(function* ({ Api }) {
    const { User } = Api
    const [ user ] = yield User.list()
    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                {[].map(pet => (
                    <li>
                        <span>{pet.name} </span>
                        <button onClick={() => pet.delete()}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
})

export default UserDetails