import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  styledDiv: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontSize: '16px',
    padding: '20px',
    borderRadius: '4px',
  },
});

const StyledJSSComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.styledDiv}>
      <h2>This is a Styled-JSS Component</h2>
      <p>It has a light gray background color and dark gray text color.</p>
    </div>
  );
};

export default StyledJSSComponent;
