import React from 'react'
import { Link } from 'react-router-dom'

export const Series = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to = "/series/action">ACTION</Link>
        </li>
        <li>
          <Link to = "/romentic">ROMENTIC</Link>
        </li>
        <li>
          <Link to = "/thrill">THRILL</Link>
        </li>
      </ul>

    </div>
  )
}
