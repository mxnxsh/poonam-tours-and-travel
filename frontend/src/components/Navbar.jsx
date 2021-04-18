import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DropDown from './DropDown';

const Navbar = props => {
  const bill = useSelector(state => state.bill);
  const { billItems } = bill;
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
            <Link to='/admin/bill'>
              Create Bill{' '}
              {billItems.length > 0 && (
                <span className='badge'>{billItems.length}</span>
              )}
            </Link>
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
          <li>
            <div>
              <Link className='' to='/all-bills'>
                All bill
              </Link>
            </div>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Navbar;
