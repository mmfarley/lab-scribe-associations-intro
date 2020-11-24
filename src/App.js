import React from 'react'
import { tether } from '@triframe/designer'

const UserDetails = tether(function* ({ Api }) {
    const { User } = Api
    const [ user ] = yield User.list(`
        name,
        pets {
            name
        }
    `)
    return (
        <div>
            <h1>{user.name}</h1>
            <ul>
                {user.pets.map(pet => (
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