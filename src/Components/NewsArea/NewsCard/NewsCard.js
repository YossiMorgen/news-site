import { useRef } from 'react';
import './NewsCard.css'

function NewsCard({article}){

    const button = useRef();
    
    const jumpWind = () => button.current.classList.toggle('hide')

    return(
        <div className="NewsCard" >
            <a href={article.url} rel="noreferrer" target={'_blank'}>
                <h3>{article.title}</h3>
                <img src={article.urlToImage} alt='article pic'/><br/>
                <p ref={button} className='hide'>{article.content || "sorry but we don't have any info on this article"}</p>
                <small>publish at: {(article.publishedAt).slice(0, 10)}</small>
            </a>
            
            <div>
                <button onClick={jumpWind} >info</button>                
            </div>
        </div>
    )
}

export default  NewsCard;