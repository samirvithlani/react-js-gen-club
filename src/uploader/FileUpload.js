import axios from 'axios'
import React, { useState } from 'react'


export const FileUpload = () => {

    const [name, setname] = useState('')
    const [file, setfile] = useState()
    const [mfile, setmfile] = useState([])

    const submit = ()=>{

        const formData = new FormData()
        formData.append('file',file)
        formData.append('name',name)

        axios.post('http://localhost:8080/upload',formData).then(res=>{

            console.log(res.data)
        })

    }
    const singlefileHandler = (e)=>{

        console.log(e.target.files);
        setfile(e.target.files[0])

    }
    

  return (
    <div>
            <form onSubmit = {submit}>
                <input type="file" name="file" id="file" onChange = {(e)=>{singlefileHandler(e)}} multiple/>
                <input type = "text" onChange = {(e)=>{setname(e.target.value)}}/>
                <input type="submit" value="Upload" />
            </form>

    </div>
  )
}
