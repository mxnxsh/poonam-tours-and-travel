import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import DropDown from './DropDown';

const Navbar = props => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  return (
    <>
      <header className='row'>
        <div>
          <Link className='brand' to='/'>
            Poonam Transport
          </Link>
        </div>
        <ul className='row right'>
          <li>
            <DropDown
              options={[
                {
                  id: 1,
                  entities: 'Add Entry',
                  link: '/admin/entry',
                },
                {
                  id: 2,
                  entities: 'Add Company',
                  link: '/admin/company',
                },
                {
                  id: 3,
                  entities: 'Add Vehicle',
                  link: '/admin/vehicle',
                },
              ]}
              buttonTitle='Admin'
            />
          </li>
          <li>
            <DropDown
              // options={['Show Entries', 'Show Customers', 'Show Vehicles']}
              options={[
                {
                  id: 1,
                  entities: 'Show Entries',
                  link: '/admin/show-entries',
                },
                {
                  id: 2,
                  entities: 'Show Customers',
                  link: '/admin/show-companies',
                },
                {
                  id: 3,
                  entities: 'Show Vehicles',
                  link: '/admin/show-vehicles',
                },
              ]}
              buttonTitle='Entries'
            />
          </li>
          <li>
            {/* <DropDown
              options={[
                {
                  id: 1,
                  entities: 'Bill-1',
                  link: '/admin/entry',
                },
                {
                  id: 2,
                  entities: 'Bill-2',
                  link: '/admin/customer',
                },
                {
                  id: 3,
                  entities: 'Bill-3',
                  link: '/admin/vehicle',
                },
              ]}
              // options={['Bill-1', 'Bill-2', 'Bill-3']}
              buttonTitle='Bills'
            /> */}
            <Link to='bill'>Bills</Link>
          </li>
          <li>
            <DropDown
              // options={['Bill-1', 'Bill-2', 'Bill-3']}
              options={[
                {
                  id: 1,
                  entities: 'Bill-1',
                  link: '/admin/entry',
                },
                {
                  id: 2,
                  entities: 'Bill-2',
                  link: '/admin/customer',
                },
                {
                  id: 3,
                  entities: 'Bill-3',
                  link: '/admin/vehicle',
                },
              ]}
              buttonTitle='Provisional-Bills'
            />
          </li>
        </ul>
      </header>
      <aside className={sidebarIsOpen ? 'open' : ''}>
        <ul className='categories'>
          <li>
            <strong>Section Open</strong>
            <IconButton onClick={() => setSidebarIsOpen(false)} type='button'>
              <CloseIcon
                fontSize='large'
                style={{ color: 'black' }}
                className='close-sidebar'
              />
            </IconButton>
          </li>
          <li>
            <Link to='/admin' onClick={() => setSidebarIsOpen(false)}>
              Admin
            </Link>
          </li>
          <li>
            <Link to='/hero' onClick={() => setSidebarIsOpen(false)}>
              Entries
            </Link>
          </li>
          <li>
            <Link to='/hero' onClick={() => setSidebarIsOpen(false)}>
              Bills
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
