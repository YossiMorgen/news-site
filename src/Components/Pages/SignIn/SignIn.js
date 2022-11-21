import axios from "axios";
import { useState } from "react";
import appConfig from "../../Config/appConfig";
import useAuth from "../../Services/useAuth";
import './SignIn.css'


function SignIn() {

    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

    const countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th"]

    const { loginUser } = useAuth();
    
    const form = {
        email: '',
        password: '',
        f_name: '',
        l_name: '',
        category: '', 
        country: '',
    }

    

    const [data, setData] = useState(form);
    const [err, setErr] = useState('');

    const update = e => {
        const val = e.target.value;
        const name = e.target.name;
        
        setData({ ...data, [name]: val });
        console.log(data);
    } 
    
    const init = n => ({name: n, value: data[n], onChange: update })

    const send = e => {
        e.preventDefault();
        setErr('');
        if(data.l_name === '' || data.f_name === ''){
            console.log('please enter your name') 
            return
        }

        if(data.category === '' && data.country === ''){
            console.log("please enter default search setting")
            return
        }
        console.log(data);

        axios.post(appConfig.register, data)
            .then(response => loginUser(response))
            .catch(err => setErr(err.response.data))
    }


    return (
        <div className="SignIn">
            <h2>SignIn</h2>
            <hr />

            <form onSubmit={send}>

                <label>
                    <span>Email</span><br/>
                    <input {...init('email')} />
                </label>
                <br/>
                <label>
                    <span>Password</span><br/>
                    <input type="password"  {...init('password')}/>
                </label>
                <br/>
                <label>
                    <span>First Name</span><br/>
                    <input type="text" {...init('f_name')}/>
                </label>
                <br/>
                <label>
                    <span>Last Name</span><br/>
                    <input type="text" {...init('l_name')} />
                </label>
                
                
                
                <br/>
                <label>
                    <span>Categories  </span>
                    <select {...init('category')}>
                        <option value=''>--choose--</option>
                        {categories.map((category, index) => <option key={index} value={category} >{category}</option>)}
                    </select>
                </label>
                
                <br/>
                <label>
                    <span>country</span><br/>
                    <select {...init('country')}>
                        <option value=''>--choose--</option>
                        {countries.map((country, index) => <option key={index} value={country} >{country}</option>)}
                    </select>
                </label>

                <br />
                <button >SignIn </button>

                <br />
                <span>{err}</span>

            </form>

        </div >
    )
}
export default SignIn