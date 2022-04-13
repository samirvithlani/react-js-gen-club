import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateDoctor = () => {

    const [doctor, setdoctor] = useState('')
    const [name, setName] = useState(doctor.dName)
    const [exp, setExp] = useState(doctor.dExp)
    const [age, setAge] = useState(doctor.dAge)
    const [email, setemail] = useState(doctor.dEmail)

    const dId = useParams().id;

    const update = async()=>{
        var doctor = {
            dName: name,
            dExp: exp,
            dAge: age,
            dEmail: email

        }

        axios.put("http://localhost:8080/updatedoctor/"+dId,doctor).then((res)=>{

               toast.success(`${res.data.dName} added successfully` , {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                
         })
            
    }
    const getDataById = async()=>{

        axios.get("http://localhost:8080/getdoctor/"+dId).then((res)=>{

                setdoctor(res.data)
                setName(res.data.dName)
                setExp(res.data.dExp)
                setAge(res.data.dAge)
                setemail(res.data.dEmail)
                
                console.log(res.data)
        })

    }
    
    useEffect(() => {
      
        getDataById()
    
      return () => {
        
      }
    }, [])
    
    

    return (
        <div>
            <form onSubmit = {update}>
            <div class="form-group">
                    <label for="exampleInputEmail1">DOCTOR NAME</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue = {doctor.dName} onChange = {(e)=>setName(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">DOCTOR AGE</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue ={doctor.dAge}
                    onChange = {(e)=>setAge(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">DOCTOR EXP</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue = {doctor.dExp}
                    onChange = {(e)=>setExp(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" defaultValue = {doctor.dEmail}
                    onChange = {(e)=>setemail(e.target.value)}
                    />
                    <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
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
