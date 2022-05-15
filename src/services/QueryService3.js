import axios from "axios";
import { useMutation, useQuery } from "react-query";



const addData = (data) => {

    return axios.post("https://reqres.in/api/users", data);
}

export function useAddData() {

    //settled
    return useMutation(addData, { onSuccess: () => console.log("success") },{onError:()=>console.log("error")},{onSettled:()=>console.log("settled")},{onAbort:()=>console.log("abort")});
}
