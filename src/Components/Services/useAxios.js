import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(url){

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {
        axios.get(url)
        .then(response => setData(response))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [url])

    return [data, setData, error, loading]
}

export default useAxios;