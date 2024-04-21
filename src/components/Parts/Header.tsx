
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" className='text-4xl'>Recipe App</Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
