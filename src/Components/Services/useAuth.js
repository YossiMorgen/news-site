import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import appConfig from "../Config/appConfig";
import AuthContext from "../Context/AuthContext/AuthContext";
import NewsContext from "../Context/NewsContext/NewsContext";
import NewsAxios from "./NewsAxios";

function useAuth() {
    const {setNews} = useContext(NewsContext)
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const loginUser = auth => {
        
      const countries = appConfig.countries;
      const categories = appConfig.categories
      const url = appConfig.news + "country=" + (auth?.data?.user?.country || countries[(Math.floor(Math.random()* countries.length + 1))]) + "&category=" + (auth?.data?.user?.category || categories[(Math.floor(Math.random()* categories.length))]) + appConfig.newsKey;
        const {data} = NewsAxios(url);
        setNews(data)
        console.log("hi");
        setAuth({ ...auth });
        sessionStorage.setItem('user', JSON.stringify(data));
        navigate('/home');
    }

    const logoutUser = () => {
        setAuth({});
        sessionStorage.removeItem('user');
        navigate('/home');
    }

    return {  loginUser, logoutUser }

}

export default useAuth;