import { Outlet, NavLink } from 'react-router-dom';
import css from 'components/Layout/Layout.module.css'

const Layout = () => {
  return (
    <container>
      <header>
        <nav> 
          <NavLink to="/" className={css.link}>Home</NavLink>
          <NavLink to="/movies" className={css.link}>Movies</NavLink>
        </nav>
      </header>
      <main>
         <Outlet />
      </main>
    </container>
  );
};

export default Layout;