import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="d-flex flex-row justify-content-between">
          <Link  to="/"><h1>To DO List</h1></Link>
         <div className="">
            <ul>
              <li>
                <Link  to="/">Home</Link>
              </li>
              <li>
                <Link  to="/mylist">My list</Link>
              </li>
              <li>
                <Link  to="/tasks">Tasks</Link>
              </li>
              <li>
                <Link to="/goal">Goal</Link>
              </li>
            </ul>
            
          </div>
      </div>
      </nav>
    </header>
  );
};

export default Header;
