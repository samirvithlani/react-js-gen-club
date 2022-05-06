import React from 'react'
import { useGetUserData, useGetUserData1 } from '../services/QueryServices'
import { useState } from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";


export const QueryDemo = () => {

    //const {isLoading, data, error} = useGetUserData();
    const [user1, setuser1] = useState('')
    const [user2, setuser2] = useState('')

    const res1 = useGetUserData();
    const res2 = useGetUserData1();

    const [isLoading, setisLoading] = useState(false)
    const demo1 = async() => {

        console.log("res1 =>", res1);
        if (res1.isLoading) {

            setisLoading(true)
            console.log("isLoading =>", isLoading);
        }
        else if (res1.error) {
            return <div>Error...</div>
        }

            
        else {
            setisLoading(false)
            setuser1(res1.data.data.data)
        }

    }

    const demo2 = () => {

        console.log("res2 =>", res2);
        if (res2.isLoading) {

            return <div>Loading...</div>
        }
        else if (res2.error) {
            return <div>Error...</div>
        }


        else {
            setuser1(res2.data.data.data)
        }

    }

    console.log("user1 =>", user1);


    return (
        <div>
            <button onClick={() => { demo1() }}>Get User Data1</button>
            
            {
                isLoading ? <ClipLoader size={50} color={"#123abc"} loading={isLoading} /> :
                <button onClick={() => { demo2() }}>Get User Data2</button>
            }
        </div>
    )
}
