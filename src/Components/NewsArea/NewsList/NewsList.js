import { useContext } from "react";
import NewsContext from "../../Context/NewsContext/NewsContext";
import NewsCard from "../NewsCard/NewsCard";
import './NewsList.css'
function NewsList(){
    const {news} = useContext(NewsContext)

    return(
        <div className="NewsList">
            {!news.data.articles.length && (<div>sorry but we don't have info for your search</div>)}
            {news.data.articles?.map((article, index)=><NewsCard key={index} article={article}/>)}
        </div>
    )
}

export default  NewsList;