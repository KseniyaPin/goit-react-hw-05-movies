import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from '../Layoute/Layoute.module.css';

export const Layout = () => {
  return (
    <div>
      <ul className={css.LayouteIList}>
        <li className={css.LayouteItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={css.LayouteItem}>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
