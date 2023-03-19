import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function NewsAxios(url){

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)

    

        axios.get(url)
        .then(response => {
            
            if(response.data?.articles?.length === 0){
                toast("sorry but  we don't have info for your search")
                return;
            }
            setData(response)
        })
        .catch(err => {
            toast.error(err?.response?.data)
            setError(err)
        })
        .finally(() => setLoading(false))

    return {data, error, loading, setData, setError, setLoading}
}

export default NewsAxios;