import React from 'react';
import { css } from 'glamor';

const glamorStyles = css({
  backgroundColor: '#f0f0f0',
  color: '#333',
  fontSize: '16px',
  padding: '20px',
  borderRadius: '4px',
});

const GlamorJSSComponent = () => {
  return (
    <div {...glamorStyles}>
      <h2>This is a Glamor-JSS Component</h2>
      <p>It has a light gray background color and dark gray text color.</p>
    </div>
  );
};

export default GlamorJSSComponent;
