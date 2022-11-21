import { Route, Routes } from "react-router-dom";
import Search from "../../DashBoard/Search/Search";
import NewsList from "../../NewsArea/NewsList/NewsList";
import useTitle from "../../Services/useTitle";
import './News.css'
function News(){
    useTitle('news');
    const auth = JSON.parse(sessionStorage.getItem('user'));

    

    return (
        <div className='News'>
            {auth?.data && <Search/>}
            
            <Routes>
                <Route path="/*" element={<NewsList />}/>
            </Routes>
        </div>
    )
}

export default News;