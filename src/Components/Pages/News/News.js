import axios from "axios";
import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import appConfig from "../../Config/appConfig";
import NewsContext from "../../Context/NewsContext/NewsContext";
import Loader from "../../DashBoard/Loader/Loader";
import NewsList from "../../NewsArea/NewsList/NewsList";
import useTitle from "../../Services/useTitle";
import './News.css'
function News(){
    useTitle('news');
    const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
    const countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th"]
    const auth = JSON.parse(sessionStorage.getItem('user'));
    const {set} = useContext(NewsContext)

    const form = {
        search: '',
        category: '', 
        country: '',
    }



    const [data, setData] = useState(form);
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);

    const update = e => {
        const val = e.target.value;
        const name = e.target.name;
        setData({ ...data, [name]: val });
    }

    const valid = () => {
        for (const key in data) {
            if(data[key] !== ""){
                return true;
            }
        }
        return false
    }

    const send = e => {
        e.preventDefault();

        if(!valid()){
            console.log("please enter some info to search")
          return;
        }


        setErr('');

        setLoading(true);
        const url = appConfig.news + "country=" + data.country + "&q=" + data.search + "&category=" + data.category + appConfig.newsKey;
        console.log(url);
        
        axios.get(url)
            .then(response => {
                if(response.data.articles.length === 0){
                    console.log("we don't have info for your search")
                    return;
                }
                 
                set(response)
            })
            .catch(err => console.log(err))
            // .finally(() => setLoading(false))
    }
    if(err){
        console.log(err);
        return(
            <div>
                error
            </div>
        )
    }

    if(loading){
        <div>
            <Loader/>
        </div>
    }

    return (
        <div className='News'>
            {auth?.data && <form onSubmit={send}  className="searchForm">

            <label>
                <span>Search Topic</span>
                <input type='text' name="search" value={data.search} onChange={update}/>
            </label>

            <label>
                <span>Categories  </span>
                <select
                value={data.category}
                onChange={update}
                name='category'
                >
                    <option value=''>--choose--</option>
                    {categories.map((category, index) => <option key={index} value={category} >{category}</option>)}
                </select>
            </label>

            <label>
                <span>  Country  </span>
                <select
                value={data.country}
                onChange={update}
                name='country'
                >
                    <option value=''>--choose--</option>
                    {countries.map((country, index) => <option key={index} value={country} >{country}</option>)}
                </select>
            </label>

            <button >Search </button>

            </form>}
            
            <Routes>
                <Route path="/*" element={<NewsList />}/>
            </Routes>
        </div>
    )
}

export default News;