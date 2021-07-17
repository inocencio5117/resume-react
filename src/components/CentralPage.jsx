import { React } from 'react';

import { NavBar } from './NavBar';
import { Projects } from './sections/Projects';

import '../Styles/CentralPage.scss';

export function CentralPage() {
  const descNLW = 'This project was made following the Next Level Week by RocketSeat';

  return (
    <>
      <section id="central-page">
        <NavBar />
        <div className="header">
          <h1>Discover...</h1>
        </div>

        <div className="projects">
          <h2>My Projects</h2>

          <div className="proj-grid">

            <Projects projName="letmeask" description={descNLW} link="https://www.google.com" />
            <Projects projName="Proj1" link="/" />
            <Projects projName="Proj1" link="/" />
            <Projects projName="Proj1" link="/" />
            <Projects projName="Proj1" link="/" />
            <Projects projName="Proj1" link="/" />
            <Projects projName="Proj1" link="/" />
            <Projects projName="Proj1" link="/" />
            <Projects projName="Proj1" link="/" />
            <Projects projName="Proj1" link="/" />
          </div>
        </div>

        <div className="about">
          <p />
        </div>
      </section>
    </>
  );
}
