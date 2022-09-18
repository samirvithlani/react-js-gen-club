import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/aboutus">about us</Link>
            </li>
            <li>
                <Link to="/contactus">contact us</Link>
            </li>
            <li>
                <Link to="/home">HOME</Link>
            </li>
            <li>
                <Link to="/login">login</Link>
            </li>
        </ul>
    </div>
  )
}
