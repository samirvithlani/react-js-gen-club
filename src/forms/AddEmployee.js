import React, { useState } from 'react'

export const AddEmployee = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')

    const firstnameHandler = (e)=>{

        console.log(e.target.value)
        setfirstname(e.target.value)
    }

    const submit = (e)=>{

        e.preventDefault()
        console.log("called..")
        console.log(firstname)
        console.log(lastname);
    }
    
  return (
    <div>
        <h1>Add Employee</h1>
        <form onSubmit = {submit}>
            <div>
                <label>First Name</label>
                <input type="text"  onChange = {(e)=>firstnameHandler(e)}/>
                {firstname}
            </div>
            <div>
                <label>last Name</label>
                <input type="text"
                onChange = {(e)=>setlastname(e.target.value)}
                />
                {lastname}
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
        <div>
            <table>
                <tr>
                <th>NAME</th>
                <th>SURNAME</th>
                </tr>
                <tr>
                    <td>{firstname}</td>
                    <td>{lastname}</td>
                </tr>
            </table>
        </div>

    </div>
  )
}
