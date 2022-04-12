import axios from 'axios'
import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddDoctor = () => {

    const adddoctor = async () => {

        const doctor = {
            dName: "Tejas",
            dAge: 30,
            dExp: 3,
            dEmail: "Tejas@doctor.com",

        }
        await axios.post("http://localhost:8080/adddoctor", doctor).then((res) => {

            
                toast.success(`${res.data.dName} added successfully` , {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            

        }, (err) => {


        })
    }
    return (
        <div>

            <button className="btn btn-primary" onClick={adddoctor}>Add doctor</button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}
