import React from 'react'
import { useParams } from 'react-router'

export const EmployeeDetail = () => {
    var id = useParams().id 
  return (
    <div>
        <h1>EmployeeDetail</h1>
        <h2>ID = {id}</h2>


    </div>
  )
}
