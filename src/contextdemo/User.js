import React from 'react'

export const User = (props) => {
  return (
    <div>
        {props.user.name}
        {props.user.age}

    </div>
  )
}
