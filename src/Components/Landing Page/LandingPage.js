import Logo from '../Assets/Logo.png'
import './LandingPage.css';
import { Link } from 'react-router-dom';



const LandingPage = ({ user, setUser }) => {

  return (
    <div>
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />

        <div className="nav-links">
          {user ? (
            <>
              <span className="user-info">Welcome, {user.username}</span>
              <button onClick={setUser}>Logout</button>
            </>
          ) : (
            <>
              <Link to='/singup'>Singup</Link>
              <Link to='/login'>Login</Link>
            </>
          )}
        </div>
      </nav>






    </div>
  );
};

export default LandingPage;
