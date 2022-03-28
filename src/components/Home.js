import React from 'react'

export default function Home(props) {
  return (
    <div>
        <h2>HOME COMPONENT</h2>
        <h1> Name = 
        {
            props.name
        }
        </h1>
    </div>
  )
}
