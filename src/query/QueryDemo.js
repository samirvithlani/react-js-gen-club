import React from 'react'
import { useGetUserData, useGetUserData1 } from '../services/QueryServices'

export const QueryDemo = () => {


    //single ---> loader = true

//sollution  --> appolo react hook

    // const demo1 = () => {
    //     const { isLoading, isError, data, error } = useGetUserData()
    //     console.log("is loading...", isLoading)
    //     console.log("data..", data)
    //     console.log("isError", isError)
    //     console.log("error...", error)
    // }
    // const demo2 = () => {
    //     const { isLoading, isError, data, error } = useGetUserData1()
    //     console.log("is loading...", isLoading)
    //     console.log("data..", data)
    //     console.log("isError", isError)
    //     console.log("error...", error)
    // }

    return (
        <div>
            <button onClick={demo1()}>
                demo1
            </button>
            <button onClick={demo2()}>
                demo1
            </button>
        </div>
    )
}
