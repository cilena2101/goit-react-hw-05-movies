import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import css from 'components/Layout/Layout.module.css';

const Layout = () => {
  return (
    <>
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
    </>
  );
};

export default Layout;