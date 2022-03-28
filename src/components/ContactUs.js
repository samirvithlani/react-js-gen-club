import React from 'react'
import { AboutUs } from './AboutUs'

export const ContactUs = (props) => {
    var x =100
    return (
        <div>
            <h4>
                <div>
                    <table class="table">
                        <thead>
                            <tr>
                                
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Contact No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.contactPersons.map((person) => {
                                    return (<tr>
                                        
                                        <td>{person.name}</td>
                                        <td>{person.age}
                                            {
                                                person.age <=30 ? <h4>YOU ARE A YOUNG</h4>: <h4>YOU ARE AN OLD</h4>
                                            }
                                        </td>
                                        <td>{person.contactNo}</td>
                                    </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>

            </h4>
            <AboutUs contactPersons = {props.contactPersons} x = {x}/>
        </div>
    )
}
