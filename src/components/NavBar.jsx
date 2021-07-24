import { React, useState } from 'react';

import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { MobileNav } from './navigation/MobileNav';
import { NormalNav } from './navigation/NormalNav';

import '../Styles/NavBar.scss';

export function NavBar() {
  const [open, setOpen] = useState(false);

  const menuIcon = <BiMenu className="hamburguer-menu" onClick={() => setOpen(!open)} />;
  const closeIcon = <MdClose className="hamburguer-menu" onClick={() => setOpen(!open)} />;

  // const closeMobileMenu = () => setOpen(false);

  return (
    <div id="nav-bar">
      <NormalNav />
      {open && <MobileNav />}
      <div className="icons">
        <BsThreeDotsVertical className="dots-sidebar" />
        {open ? closeIcon : menuIcon}
      </div>
    </div>
  );
}
