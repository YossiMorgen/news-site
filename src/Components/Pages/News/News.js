import { useContext, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import NewsContext from "../../Context/NewsContext/NewsContext";
import Search from "../../DashBoard/Search/Search";
import NewsList from "../../NewsArea/NewsList/NewsList";
import useTitle from "../../Services/useTitle";
import './News.css'
function News(){
    useTitle('news');
    const auth = JSON.parse(sessionStorage.getItem('user'));
    const toastId = useRef(null)
    const { error , loading } = useContext(NewsContext)


    if(error){
        toast.error(error)
        return(
            <div>
                err
            </div>
        )
    }

    if(loading){
        toastId.current = toast.loading('loading...')
        return(
            <div>
                loading
            </div>
        )
    }
    toast.dismiss(toastId.current)
    toast.success('Info recived successfuly')
    return (
        <div className='News'>
            {auth?.data && <Search/>}
            <NewsList />
        </div>
    )
}

export default News;