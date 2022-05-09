import React from 'react'
import { useFetchUserData } from '../services/QueryService1'

export const QueryDemo2 = () => {
    const res = useFetchUserData()
    console.log(res)

   const addUser = () => {
         res.refetch()
         console.log(res)
   }
  return (
    <div>

        <button onClick={()=>addUser()}>click</button>
    </div>
  )
}
