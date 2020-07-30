import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="RenatoFlix logo" />
      </Link>

      <Link to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Link>
    </nav>
  );
}

export default Menu;
