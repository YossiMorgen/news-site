import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import useAuth from '../../Services/useAuth';
import './Header.css';

function Header() {
  const {auth} = useContext(AuthContext);
  const {logoutUser} = useAuth();
  console.log(auth);
  return (
    <header className="Header">
      <h1>News-Site</h1>
      {
        auth?.data  && <button onClick={logoutUser}>Logout</button>
      }

      {
        !auth?.data &&
        <div>
          <NavLink to={'/loggin'}>Log In</NavLink>
          <NavLink to={'/sign_in'}>Sign In</NavLink>
        </div>
      }
    </header>
  );
}

export default Header;
