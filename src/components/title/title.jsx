import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.css'

function Title({ text }) {
  return <h1 className={styles.background}>{text}</h1>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;