import React from 'react'
import { useAddData } from '../services/QueryService3'

export const QueryDemo4 = () => {

    const res = useAddData();
    //const {mutate} = useAddData();

    const submit =() =>{
        var data = {
             name:"sachin",
             job:"cricketer"
        }
        res.mutate(data);
        console.log(res);
    }
  return (
    <div>
        <button onClick={submit}>Add Data</button>
    </div>
  )
}
