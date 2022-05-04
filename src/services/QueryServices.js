import axios from "axios";
import { useQuery } from "react-query";

export function useGetUserData(){

    return useQuery('demo',async()=>{
        return await axios.get("https://reqres.in/api/unknown/23");
    })

}

export function useGetUserData1(){

    return useQuery('demo1',async()=>{
        return await axios.get("https://reqres.in/api/users?page=2");
    })

}