import React from 'react';

const Section = ({ title, children }) => {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Section;
