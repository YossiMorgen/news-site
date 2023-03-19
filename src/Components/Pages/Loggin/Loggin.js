import './Loggin.css';

import axios from "axios";
import { useRef, useState } from "react";
import appConfig from "../../Config/appConfig";
import useAuth from '../../Services/useAuth';


function Loggin() {

    const { loginUser } = useAuth();

    const form = {
        email: '',
        password: '',
    }

    const [data, setData] = useState(form);
    const [err, setErr] = useState('');

    const update = e => {
        const val = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: val });
    } 

    const init = n => ({name: n, value: data[n], onChange: update })

    const send = e => {
        e.preventDefault();
        console.log(data);
        setErr('');

        axios.post(appConfig.login, data)
            .then(response => loginUser(response))
            .catch(err => setErr(err.response.data))
    }


    return (
        <div className="Loggin">
            <h2>Loggin</h2>
            <hr />

            <form onSubmit={send}>

                <label>
                    <span>Email</span><br/>
                    <input type="text" {...init('email')}/>
                </label>
                <br/>
                <label>
                    <span>Password</span><br/>
                    <input type="text" {...init('password')} />
                </label>

                <br />
                <button >Loggin <span className="loader"></span></button>

                <br />
                <span>{err}</span>

            </form>

        </div >
    )
}
export default Loggin