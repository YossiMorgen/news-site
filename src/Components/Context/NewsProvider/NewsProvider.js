import axios from "axios";
import { Children, useEffect, useState } from "react";
import { toast } from "react-toastify";
import appConfig from "../../Config/appConfig";
import NewsContext from "../NewsContext/NewsContext";

function NewsProvider({children}){
    const [auth, setAuth] = useState(JSON.parse(sessionStorage.getItem('user')) || {});

    const [news, setNews] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
  console.log(appConfig.categories);
    useEffect(()=>{
      const countries = appConfig.countries;
      const categories = appConfig.categories

      const url = appConfig.news + "country=" + (auth?.data?.user?.country || auth?.data?.country || countries[(Math.floor(Math.random()* countries.length + 1))]) + "&category=" + ((auth?.data?.user?.category || auth?.data?.category) || '' || categories[(Math.floor(Math.random()* categories.length))]) + appConfig.newsKey;
        

        axios.get(url)
          .then(response => {
            if(response.data?.articles?.length === 0){
              toast("sorry but  we don't have info for your search")
              return;
            }
            setNews(response)
            console.log(response)
          })
          .catch(err => {
            toast.error(err?.response?.data)
            setError(err?.response?.data)
          })
          .finally(() => setLoading(false))
      },[auth])
      
      return(
        <NewsContext.Provider value={{news, setNews, error, setError, loading, setLoading}}>
            {children}
        </NewsContext.Provider>
      )
}

export default NewsProvider;