import { useState } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import Aside from '../Aside/Aside';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './Layout.css';
import NewsProvider from '../../Context/NewsProvider/NewsProvider';

function Layout() {
    const [auth, setAuth] = useState(JSON.parse(sessionStorage.getItem('user')) || {});

  return (
    <div className="Layout">
      <NewsProvider>
      <AuthContext.Provider value={{auth, setAuth}}>
        <Header/>
        <Main/>
        <Aside/>
        <Footer/>
      </AuthContext.Provider>
      </NewsProvider>

    </div>
  );
}

export default Layout;
