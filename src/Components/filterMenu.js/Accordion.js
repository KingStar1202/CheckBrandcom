import { useState } from 'react';

import './style.scss'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className='accordion-title_active'>
            <h6>{title}</h6>
            <div >{isActive ? '-' : '+'}</div> 
          </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;