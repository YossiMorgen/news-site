import axios from 'axios';
import { useEffect, useState } from 'react';
import appConfig from '../../Config/appConfig';
import AuthContext from '../../Context/AuthContext/AuthContext';
import NewsContext from '../../Context/NewsContext/NewsContext';
import Loader from '../../DashBoard/Loader/Loader';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './Layout.css';

function Layout() {
    const [auth, setAuth] = useState(JSON.parse(sessionStorage.getItem('user')) || {});

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)
    
    if (auth.data) {
      axios.interceptors.request.use((config) => {
          config.headers = { Authorization: "Bearer " + auth.data.accessToken }
          return config;
      })
    }

    useEffect(()=>{
      let url = ''
      // if(auth.data){
      //   url = appConfig.news + "country=" + auth.data.user.country + "&category=" + auth.data.user.category + appConfig.newsKey;
      // }else{
        const categories = ["business", "entertainment", "general", "health", "science", "sports", "technology"]
        const countries = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th"]
        url = appConfig.news + "country=" + countries[(Math.floor(Math.random()* countries.length + 1))] + "&category=" + categories[(Math.floor(Math.random()* categories.length))] + appConfig.newsKey;
      // }
        axios.get(url)
        .then(response => setData(response))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    },[auth])

  if(error){
    return(
      <main className="Main">
        error
      </main>
    )
  }
  if(loading){
    return(
      <main>
        <Loader />
      </main>
    )
  }
  return (
    <div className="Layout">
      <AuthContext.Provider value={{auth, setAuth}}>
      <NewsContext.Provider value={{news: data, set: setData}}>
        <Header/>
        <Main/>
        <Aside/>
        <Footer/>
      </NewsContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default Layout;
