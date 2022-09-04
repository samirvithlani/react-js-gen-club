import React from 'react'
import {useForm} from 'react-hook-form'
export const HookFromDemo1 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm({
        mode:'onChange'
    });

    const submitHandle = (data)=>{
        console.log("form data!!",data)
    }
    const validationSchema = {
        name:{required:"name is required"},
        email:{required:"email is required",minLength:{
            value:5,
            message : "check len" 
        }},
        phone:{
            pattert:"^[6-9]{1}[0-9]{9}$",
            message:"check phone no"
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submitHandle)}>
            <div>
                <label htmlFor="name">Name</label>
                <input name = "name" {...register('name',validationSchema.name)}/>
                {
                    errors.name && <div>{errors.name.message}</div>
                }
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input name = "email" {...register('email',validationSchema.email)}/>
                
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input name = "phone" {...register('phone',validationSchema.email)}/>
                {
                    errors?.email && <div>{errors.phone.message}</div>
                }
            </div>
            <div>
                <input disabled={errors}type="submit" value="submit"/>
            </div>
        </form>

    </div>
  )
}
