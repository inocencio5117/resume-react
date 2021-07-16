import { React, useState } from 'react';

import { BiMenu } from 'react-icons/bi';

import { MobileNav } from './navigation/MobileNav';
import { NormalNav } from './navigation/NormalNav';

import '../Styles/NavBar.scss';

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div id="nav-bar">
      <NormalNav />
      {open && <MobileNav />}
      <BiMenu
        className="hamburguer-menu"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}
