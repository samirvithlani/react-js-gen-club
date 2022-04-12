import axios from 'axios'
import React, { useEffect, useState } from 'react'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DoctorList = () => {

    const [doctors, setdoctors] = useState([])
    const getDoctors = async () => {

        axios.get("http://localhost:8080/getalldoctors").then((res) => {

            setdoctors(res.data)
        })
    }

    useEffect(() => {
        getDoctors()

        return () => {

        }
    }, [])

    const deleteDoctor = async (dId) => {

        axios.delete("http://localhost:8080/deletedoctor/" + dId).then((res) => {

            if (res.status === 204) {
                toast.success(` deleted successfully`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            getDoctors()
        })
    }


    return (
        <div>

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
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Experiance</th>
                        <th scope="col">Email</th>
                        <th scope="col">AGe</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        doctors.map((doctor) => {
                            return (<tr>
                                <th scope="row">{doctor.dId}</th>
                                <td>{doctor.dName}</td>
                                <td>{doctor.dExp}</td>
                                <td>{doctor.dEmail}</td>
                                <td>{doctor.dAge}</td>
                                <td><button className="btn btn-danger" onClick={() => { deleteDoctor(doctor.dId) }}>DELETE DOCTOR</button></td>

                            </tr>

                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}
