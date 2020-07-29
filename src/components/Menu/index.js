import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="RenatoFlix logo" />
      </a>

      <a className="ButtonLink" href="/cadastro/video">
        Novo vídeo
      </a>
    </nav>
  );
}

export default Menu;