import React, { useContext } from 'react'
import { appContext } from './context';

export const AddUser = () => {
    const {dispatachUserEvent} = useContext(appContext);
    const submit = ()=>{
        //form
        var data = {
            name:"harshil",
            age:23
        }
        dispatachUserEvent('ADD_USER',data)
    }
  return (
    <div>
        {/* form */}
        <button onClick={submit}>Add User</button>
    </div>
  )
}
