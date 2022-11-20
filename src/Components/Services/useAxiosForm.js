import axios from "axios";
import { useState } from "react";


function useAxiosForm(url){

  const [fields, setFields] = useState({
    "email": {
      value: '',
    },
    "password": {
      value: '',
    },
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  let update = e => {
    let name = e.target.name;
    let val = e.target.value;

    setFields({...fields, [name]: val})
  }

  const send = e =>{

  e.preventDefault();
    axios.post(url, fields)
    .then(response => setFields(response))
    .catch(response => console.log(response))
    .finally(() => setLoading(false))

    console.log(fields);
  }

  

  let init = n => {
    console.log(n);
    return {name: n, value: fields[n].value, onChange: update}
  }

    

  // let fields =  {...data}

  return [send, fields, loading, error, init ];
}

export default useAxiosForm;