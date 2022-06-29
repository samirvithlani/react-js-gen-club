import React from 'react'
import { useFormik } from 'formik'
import {required}  from './constans'
import {lenforname} from './constans' 

export const FormikDemo1 = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
    }
    const onSubmit = (values) => {
        console.log(values)
    }

    const validate = (values) => {
        //declare object of erro
        //dirty...
        let errors = {}
        //firstname validation
        if (!values.firstName) {
            errors.firstName = required
        }
        else if(values.firstName.length < 2 || values.firstName.length > 10){
            errors.firstName = lenforname
        }

        return errors
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: validate


    })
    ///console.log(formik.values)
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} />
                    <span>
                        {
                            formik.errors.firstName
                                ? <div>{formik.errors.firstName}</div> : null
                        }
                    </span>
                </div>

                <div>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' id='lastName' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} />
                </div>
                <div>
                    <input type="submit" value="submit"></input>
                </div>
            </form>

        </div>
    )
}
