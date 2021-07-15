import { React, useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

import '../Styles/Hamburguer.scss';

// export function CustomizedAccordions() {
//   const [expanded, setExpanded] = useState('panel1');

//   const handleChange = (panel) => (event, newExpanded) => {
//     setExpanded(newExpanded ? panel : false);
//   };

export function Hamburguer() {
  function handleOpenMenu(e) {
    const [open, setOpen] = useState(false);

    if (e) {
      
    }
  }

  return (
    <div id="hamburguer">
      <GiHamburgerMenu onClic={handleOpenMenu} className="menu" />
    </div>
  );
}
