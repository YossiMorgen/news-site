import { Link } from 'react-router-dom';
import useTitle from '../../Services/useTitle';
import './Home.css';

function Home() {
  const auth = JSON.parse(sessionStorage.getItem('user'));

  useTitle('home');

  let user = '';

  (auth?.data) && (user = (auth?.data?.user?.f_name || auth?.data?.f_name) + ' ' + (auth?.data?.user?.l_name || auth?.data?.l_name))
  
  return (
    <div className="Home">
        <h2>Welcome {user}</h2>
        <hr/>
        <p>
          {/* <Link/> */}
          welcome to my news app  
          {!auth?.data ? (<> you can <Link to='/sign_in' >sign in</Link>   or   <Link to='/loggin'>log in</Link></>) : ''}
          <br/>
          in the news page you'll have a list of random <Link to='news'>news</Link> 
          <br/>
          once you connected to the system you have a search options and 
          {auth?.data ? (<><Link to='setting'> setting </Link></>) : ' setting ' } page
        </p>
    </div>
  );
}

export default Home;
 