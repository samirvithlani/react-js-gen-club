import React, { useRef, useState } from 'react'

export const SimpleForm = () => {

    const [name, setName] = useState("")
    const [email, setemail] = useState("")
    var password = useRef()

    const [namevaldator, setnamevaldator] = useState(false)
    const [emailvalidator, setemailvalidator] = useState(false)



    const nameHandeler = (e) => {

        if(e.target.value === ""){
            setnamevaldator(true)
        }
        else{
            setnamevaldator(false)
            setName(e.target.value)
        }
        

        console.log(e.target.value)
    }
    const emailHandeler = (e) => {
        if(e.target.value.length <5){
            setemailvalidator(true)
        }
        else{
            setemailvalidator(false)
            setemail(e.target.value)
        }
        
        console.log(e.target.value)
    }
    

    const submit = (e) => {
        e.preventDefault()
        if(password.current.value === ""){
            alert("password is required")
        }
        console.log(name, email, password.current.value)
    }

    return (
        <div className = "container">

            <form onSubmit = {submit}>
                <div class="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name"
                    onChange = {(e)=>nameHandeler(e)}
                    />
                    {
                        namevaldator ? <p style = {{color:"red"}}>Name is required</p> : null
                    }
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                    onChange = {(e)=>emailHandeler(e)}
                    />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    {
                        emailvalidator ? <p style = {{color:"red"}}>check Email len </p> : null
                    }
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" 
                    ref = {password}
                    />
                </div>


                <button ṁṁāṁtype="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
