import axios from "axios"
import { useQuery } from "react-query"

export const fetchUserData = async () =>{

    return await axios.get("http://localhost:8080/Ecommerce-Rohith/productlistcontroller")
}
export const useFetchUserData = () => {

    return useQuery('demo',fetchUserData,{
        retry: 10,
        retryDelay: 10,
        enabled:true,
        refetchOnMount:true,
    })
}