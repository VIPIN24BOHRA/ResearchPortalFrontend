/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  txt: {
    fontSize: '20px',
    margin: '20px auto',
    width: '65%',
    minHeight: '90vh',
    fontFamily: 'sans-serif',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  txtArea: {
    display: 'block',
    margin: '20px auto',
    width: '65%',
    minHeight: '90vh',
    fontSize: '20px',
    padding: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    txt: {
      width: '90%',
    },
    txtArea: {
      width: '90%',
    },
  },
}));

export default function Statement({ ie, text }) {
  const classes = useStyles();

  const [txt, setTxt] = useState(localStorage.getItem('statement') || text);

  function handleChange(e) {
    setTxt(e.target.value);
  }

  return ie ? (
    <textarea
      value={txt}
      maxLength={1500}
      onChange={handleChange}
      className={classes.txtArea}
    />
  ) : (
    <pre className={classes.txt}>{text}</pre>
  );
}

Statement.propTypes = {
  ie: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};
