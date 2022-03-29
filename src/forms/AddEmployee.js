import React, { useState } from 'react'
import { ViewEmployee } from './ViewEmployee'

export const AddEmployee = () => {
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [id, setId] = useState('')
    const [users, setusers] = useState([])

    const firstnameHandler = (e) => {

        console.log(e.target.value)
        setfirstname(e.target.value)
    }

    const submit = (e) => {


        e.preventDefault()
        console.log("called..")
        console.log(firstname)
        console.log(lastname);
        var obj = {
            firstname: firstname,
            lastname: lastname,
            id:id
        }

        setusers([...users, obj])



    }

    return (
        <div>
            <h1>Add Employee</h1>
            <form onSubmit={submit}>

                <div>
                    <label>ENTER ID</label>
                    <input type="text" onChange={(e) => setId(e.target.value)} />
                    {id}
                </div>

                <div>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => firstnameHandler(e)} />
                    {firstname}
                </div>
                <div>
                    <label>last Name</label>
                    <input type="text"
                        onChange={(e) => setlastname(e.target.value)}
                    />
                    {lastname}
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>

            </form>
            {
                users.map((user) => {
                    return (
                        <ViewEmployee users={user} />
                    )
                })
            }

        </div>
    )
}
