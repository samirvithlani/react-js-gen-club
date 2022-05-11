import React, { useEffect } from 'react'
import { useService, useService1 } from '../services/QueryService2'

export const QueryDemo3 = () => {
    const res1 = useService("demo1");
    const res2 = useService1("demo2");

    useEffect(() => {

        //condition to check if the data is loaded or not
        //idel,loading,success
        console.log(res1)   
        //idel,sucess,loading,sucess,scucess
        console.log(res2)


    },[res1,res2])

    return (
        <div>
            <button onClick={() => { res1.refetch() }}>DEMO</button>
            <button onClick={() => { res2.refetch() }}>DEMO</button>
        </div>
    )
}
