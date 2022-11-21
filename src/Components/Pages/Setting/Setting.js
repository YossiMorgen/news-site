import axios from 'axios';
import { useContext, useState } from 'react';
import appConfig from '../../Config/appConfig';
import './Setting.css'
import useTitle from "../../Services/useTitle";
import useAuth from '../../Services/useAuth';
import AuthContext from '../../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

function Setting(){
    useTitle('setting');
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
    const countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th"]
    const auth = JSON.parse(sessionStorage.getItem('user'));
    const {loginUser} = useAuth();
    const form = {
        language: '', 
        country: '',
    }

    

    const [data, setData] = useState(form);
    // const [err, setErr] = useState('');

    const update = e => {
        const val = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: val });
    }

    const init = n => ({name: n, value: data[n], onChange: update })

    const valid = ()=>{
        for (const key in data) {
            if(data[key] !== ""){
                return true;
            }
        }
        return false;
    }

    const send = e => {
        e.preventDefault();
        if(!valid()){
            console.log("please enter some info to search")
          return;
        }
        let newInfo = {};
        for (const key in data) {
            data[key] !== '' && (newInfo[key] = data[key])
        }

        axios.patch(appConfig.users + "/" + (auth.data.user?.id || auth.data.id), newInfo)
            .then(response => {
                setAuth({ ...response });
                sessionStorage.setItem('user', JSON.stringify(response));
                navigate('/news');
            })
            .catch(err => console.log("error " + err))
    }

    return(
        <div className='Setting'>
            <h2> Default Search:</h2>
            <hr/>
            <form onSubmit={send}>
                <br/>
                <label>
                    <span>Category</span><br/>
                    <select {...init('category')}
                    >
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
                <button >Update </button>
                
                <br />
                {/* <span>{err}</span> */}
            </form>
        </div>
    )
}

export default Setting;