import React, { useState } from 'react';
import Admin from '../images/admin.png';
import LinkIcon from '@material-ui/icons/Link';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
const Menu = props => {
  return (
    <>
      <div className='menu row column '>
        <Link to='/'>
          <div className='row center brand_container'>
            <span>Poonam Tours & Travels</span>
          </div>
        </Link>
        <div className='row space-beteween'>
          <img src={Admin} alt='logo' id='avatar' />
          <div className='admin_header'>
            <h2 className='admin_header'>Hi,Manish Choudhary</h2>
            <p className=' admin_header admin_prof'>Professional</p>
          </div>
        </div>
        <div className='row menu_style'>Menu</div>
        <div className='link_container'>
          <div className='row link_item'>
            {/* Admin */}
            <div className='link_item'>
              <div className='row' style={{ justifyContent: 'space-between' }}>
                <LinkIcon />
                <span>Admin</span>
                <ArrowBackIosIcon />
              </div>
              <ul style={{ display: 'block', marginLeft: '3rem' }}>
                <li>
                  <Link to='/admin'>Add Entry</Link>
                </li>
                <li>
                  <Link to='/vehicle'>Add Vechicle</Link>
                </li>
                <li>
                  <Link to='/customer'>Add Customer</Link>
                </li>
              </ul>
            </div>
            {/* Show data */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
