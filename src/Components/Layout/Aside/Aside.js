
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import './Aside.css';

function Aside() {
  const {auth} = useContext(AuthContext);
  
  return (
    <aside className="Aside">
      <img alt='clown' src='https://img.icons8.com/color/512/pennywise.png' />
        <NavLink to={'/home'} >Home</NavLink>
        <NavLink to={'/news'} >News</NavLink>
        {auth.data && <NavLink to={'/setting'} >Setting</NavLink>}
    </aside>
  );
}

export default Aside;
