import React from 'react'
import {useFormik} from 'formik'

export const FormikDemo1 = () => {

    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
        },
        onSubmit : values =>{
            console.log(values)
        }
    })
    ///console.log(formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' id='firstName' name='firstName' onChange={formik.handleChange}  value = {formik.values.firstName}/>

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' name='lastName' onChange={formik.handleChange} value = {formik.values.lastName} />

                <input  type="submit" value="submit"></input>
            </form>

        </div>
    )
}
