import { React } from 'react';

import { CreateCircularProgress } from './CreateCircularProgress';

import profilePhoto from '../assets/images/black_man.jpg';

import '../Styles/SideBar.scss';

export function SideBar() {
  function progress(language, value) {
    return (
      <div className="progress">
        <span>{`${language}:`}</span>
        <CreateCircularProgress value={value} />
      </div>
    );
  }

  function code(techName, nameClass, percentage) {
    return (
      <>
        <div className="code">
          <span>{techName}</span>
          <span>{`${percentage}%`}</span>
        </div>
        <div className={nameClass}>
          <div />
        </div>
      </>
    );
  }

  return (
    <aside className="sidebar">

      <div className="side-header">
        <img src={profilePhoto} alt="Black man in a suit" />
        <strong>
          Vinicius
        </strong>
        <span>
          Front-end Developer
          <br />
          Web Development Student
        </span>
      </div>

      <div className="side-info">
        <div>
          <span><b>Residence:</b></span>
          <span>Brazil</span>
        </div>

        <div>
          <span><b>City:</b></span>
          <span>São Paulo</span>
        </div>

        <div>
          <span><b>Age:</b></span>
          <span>23</span>
        </div>
      </div>

      <div className="side-lang">
        <h4>Languages</h4>

        {progress('Portuguese', 100)}
        {progress('English', 75)}
      </div>

      <div className="side-coding">
        <h4>Coding</h4>

        {code('HTML', 'html', 85)}
        {code('CSS', 'css', 80)}
        {code('Javascript', 'js', 80)}
        {code('Python', 'python', 85)}

      </div>

      <div className="side-knowledge">
        <h4>Knowledge</h4>
        <ul>
          <li>Node.js, Express.js</li>
          <li>Sass</li>
          <li>Webpack, Babel.js</li>
          <li>Git and Github</li>
          <li>Linux</li>
        </ul>
      </div>
    </aside>
  );
}
