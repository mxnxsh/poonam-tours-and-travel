import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const DropDown = ({ options, buttonTitle }) => {
  // options.map(option => (

  // ))
  const [anchorEl, setAnchorEl] = useState(null);
  const useStyles = makeStyles(() => ({
    root: {
      fontSize: 20,
      fontWeight: 500,
      color: '#ffffff',
    },
    root1: {
      fontSize: 20,
      fontWeight: 500,
      color: 'black',
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={event => {
          setAnchorEl(event.currentTarget);
        }}
        className={classes.root}
      >
        {buttonTitle ? buttonTitle : 'Link'}
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={classes.root}
      >
        {options.map(option => (
          <MenuItem
            key={option.id}
            onClick={() => setAnchorEl(null)}
            className={classes.root1}
          >
            <Link to={`${option.link}`}>{option.entities}</Link>
          </MenuItem>
        ))}
        {/* {options.map(option => (
          <MenuItem key={option} onClick={() => setAnchorEl(null)} className={classes.root1}>
            <Link to='/sa'>{option}
            </Link>
          </MenuItem>
        ))} */}
      </Menu>
    </div>
  );
};

export default DropDown;
