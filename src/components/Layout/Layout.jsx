import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li> 
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <main>
         <Outlet />
      </main>
    </div>
  );
};

export default Layout;
