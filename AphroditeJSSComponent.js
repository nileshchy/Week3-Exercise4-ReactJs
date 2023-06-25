import React from 'react';
import { StyleSheet, css } from 'aphrodite-jss';

const styles = StyleSheet.create({
  styledDiv: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    fontSize: '16px',
    padding: '20px',
    borderRadius: '4px',
  },
});

const AphroditeJSSComponent = () => {
  return (
    <div className={css(styles.styledDiv)}>
      <h2>This is an Aphrodite-JSS Component</h2>
      <p>It has a light gray background color and dark gray text color.</p>
    </div>
  );
};

export default AphroditeJSSComponent;
