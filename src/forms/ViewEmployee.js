import React from 'react'
import { Link } from 'react-router-dom'
import { EmployeeDetail } from './EmployeeDetail'

export const ViewEmployee = (props) => {
    return (
        <div>
            <div>

                <table>
                    <tr>
                        <th>NAME</th>
                        <th>SURNAME</th>
                        <th>ID</th>
                    </tr>
                    <tr>
                        <Link to = {`/employeedetail/${props.users.id}`}> <td>{props.users.id}</td></Link>
                        <td>{props.users.firstname}</td>
                        <td>{props.users.lastname}</td>
                    </tr>

                </table>
            </div>


        </div>
    )
}
