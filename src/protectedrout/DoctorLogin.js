import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'

export const DoctorLogin = () => {

    var navigate = useNavigate()

    const loginDoctor = async () => {

        const formData = new FormData();
        formData.append('email', 'ushma@gmail.com')
        formData.append('password', 'ushma@123')
        await axios.post("http://localhost:8080/logindoctor", formData).then(res => {

            if(res.data.doctorId>0){

                sessionStorage.setItem('doctorId',res.data.doctorId)
                navigate('/doctorlist')

            }

        })
    }
    return (
        
        <div>
            <h1>Doctor Login</h1>

            <button onClick = {loginDoctor}>LOGIN</button>

        </div>
    )
}

