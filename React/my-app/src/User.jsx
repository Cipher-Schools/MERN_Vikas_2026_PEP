import React from 'react'

function User({name, age}) {
  return (
    <div>
        <h2> Name: {name}</h2>
        <p>Age: {age}</p>
    </div>
  )
}

export default User