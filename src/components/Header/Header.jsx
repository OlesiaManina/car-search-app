import { NavLink, useLocation } from 'react-router-dom';
import Logo from 'components/Logo/Logo';
import css from './Header.module.css';

export default function Header() {

  const location = useLocation();

  return (
    <header className={css.header}>
      <Logo />
    <nav className={css.nav}>
      <NavLink className={
          location.pathname === '/'
            ? [css.link, css.active].join(' ')
            : css.link
        } to="/">
        Home
      </NavLink>
        <NavLink className={
          location.pathname === '/catalog'
            ? [css.link, css.active].join(' ')
            : css.link
        } to="/catalog">
          Catalogue
        </NavLink>
        <NavLink className={
          location.pathname === '/favorites'
            ? [css.link, css.active].join(' ')
            : css.link
        } to="/favorites">
          Favorites
        </NavLink>
    </nav>
    </header>
  );
}





