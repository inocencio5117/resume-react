import { React } from 'react';

import { BiMenu } from 'react-icons/bi';

import '../Styles/NavBar.scss';

export function NavBar() {
  return (
    <div id="nav-bar">
      <ul className="nav-links">
        <li><a href="/">Projects</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
      <BiMenu className="hamburguer-menu" />
    </div>
  );
}
