import React from 'react'
import { useParams } from 'react-router'

export const MOvieDetail = () => {
    var id = useParams().id;
    var x = useParams().id1;
  return (
    <div>MOvieDetail

        <h1> ID = {
                id
            }</h1>
            <h1> ID1 = {
                x
            }</h1>
    </div>
  )
}
