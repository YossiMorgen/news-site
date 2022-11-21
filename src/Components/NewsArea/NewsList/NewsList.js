import { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import NewsContext from "../../Context/NewsContext/NewsContext";
import NewsCard from "../NewsCard/NewsCard";
import './NewsList.css'
function NewsList(){
    const {news} = useContext(NewsContext)
    // const notify = () => toast("hi")
    return(
        
        <div className="NewsList">
            {/* <button onClick={notify}>click</button>
            <ToastContainer /> */}

            {news.data?.articles?.map((article, index)=><NewsCard key={index} article={article}/>)}
        </div>
    )
}

export default  NewsList;