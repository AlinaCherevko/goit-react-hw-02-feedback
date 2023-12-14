import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Section;
