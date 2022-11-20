
import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import Home from '../../Pages/Home/Home';
import Loggin from '../../Pages/Loggin/Loggin';
import News from '../../Pages/News/News';
import PageNotFound from '../../Pages/PageNotFound/PageNotFound';
import Setting from '../../Pages/Setting/Setting';
import SignIn from '../../Pages/SignIn/SignIn';
import './Main.css';

function Main() {
  const {auth} = useContext(AuthContext);
  return (
    <main className="Main">
        <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/home' element={<Home/>} /> 
            <Route path='/news/*' element={<News/>}/> 
            {auth.data && <Route path='/setting' element={<Setting/>}/>}             
            <Route path='/loggin' element={<Loggin/>}/> 
            <Route path='/sign_in' element={<SignIn/>}/> 
            <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
    </main>
  );
} 

export default Main;
