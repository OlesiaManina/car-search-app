import logo from '../../images/car-logo.jpg';
import css from './Logo.module.css';
import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to="/">
      <img className={css.logo} src={logo} alt="Logo" />
    </NavLink>
  );
}