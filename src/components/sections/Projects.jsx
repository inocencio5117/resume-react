import { React } from 'react';
import { PropTypes } from 'prop-types';

import { FaArrowRight } from 'react-icons/fa';

export function Projects({ projName, link, description }) {
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

Projects.propTypes = {
  projName: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
};

Projects.defaultProps = { description: '' };
