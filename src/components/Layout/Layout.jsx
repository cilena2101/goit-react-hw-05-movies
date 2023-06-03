import { Outlet, NavLink } from 'react-router-dom';
import css from 'components/Layout/Layout.module.css';
import { Suspense } from 'react';

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
        <Suspense fallback={<div>Loading...</div>}>
         <Outlet />
        </Suspense>
      </main>
    </container>
  );
};

export default Layout;