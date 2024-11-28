import React from 'react';
import './Divider.styles.scss'; // Import the CSS

const Divider = () => {
  return (
    <div className="divider">
      <div className="dotted-line"></div>
      <span className="heart">❤</span>
      <div className="dotted-line"></div>
    </div>
  );
};

export default Divider;
