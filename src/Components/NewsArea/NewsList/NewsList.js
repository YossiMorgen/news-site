import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../../Context/AuthContext/AuthContext";
import NewsContext from "../../Context/NewsContext/NewsContext";
import NewsCard from "../NewsCard/NewsCard";
import './NewsList.css'
function NewsList(){
    const {auth} = useContext(AuthContext)
    const {news} = useContext(NewsContext)
    console.log(news);
    return(
        
        <div className="NewsList">
            {news.data?.articles?.map((article, index)=><NewsCard key={index} article={article}/>)}
        </div>
    )
}

export default  NewsList;