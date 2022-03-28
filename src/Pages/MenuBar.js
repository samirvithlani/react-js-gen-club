import React from 'react'
import { Link } from 'react-router-dom'

export const MenuBar = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to = "/series">Series</Link>
            </li>
            <li>
            <Link to = "/tvshows">TV SHOWS</Link>
            </li>
            <li>
            <Link to = "/movies">MovieS</Link>
            </li>
            <li>
            <Link to = "/movies/101/102">Movie detail</Link>
            </li>
        </ul>

    </div>
  )
}
