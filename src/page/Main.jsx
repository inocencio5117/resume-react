import { React } from 'react';

import { SideBar } from '../components/SideBar';
import { CentralPage } from '../components/CentralPage';

import '../Styles/Main.scss';

export function Main() {
  return (
    <main id="Main">
      <SideBar />
      <CentralPage />
    </main>
  );
}
