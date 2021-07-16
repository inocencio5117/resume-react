import { React } from 'react';

import { FaArrowRight } from 'react-icons/fa';
import { NavBar } from './NavBar';

import '../Styles/CentralPage.scss';

export function CentralPage() {
  function project(projName, description, link) {
    const desc = description || '';

    return (
      <span>
        <div>
          <h3>{projName}</h3>
          <p>
            {desc}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, quo?
          </p>
        </div>
        <a href={link} target="_blank" rel="noreferrer noopener">
          Go to the project 
          <FaArrowRight className="arrow" />
        </a>
      </span>
    );
  }

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
            {project('Letmeask', descNLW, 'https://www.google.com')}
            {project('Proj1', '/')}
            {project('Proj1', '/')}
            {project('Proj1', '/')}
            {project('Proj1', '/')}
            {project('Proj1', '/')}
            {project('Proj1', '/')}
            {project('Proj1', '/')}
            {project('Proj1', '/')}
            {project('Proj1', '/')}
          
          </div>
        </div>

        <div className="about">
          <p />
        </div>
      </section>
    </>
  );
}
