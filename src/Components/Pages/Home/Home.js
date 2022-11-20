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
    </div>
  );
}

export default Home;
 