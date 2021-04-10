import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { removeEntryFromBill } from '../actions/billActions';
const BillScreen = props => {
  const bill = useSelector(state => state.bill);
  const { billItems } = bill;
  const dispatch = useDispatch();

  const billSaveHandler = () => {};
  const removeBillHandler = id => {
    dispatch(removeEntryFromBill(id));
  };
  return (
    <div className='row top'>
      <div className='col-2'>
        <h1>Bill Screen</h1>
        {billItems.length === 0 ? (
          <p>
            No Bill. <Link to='/'>Create Bill</Link>
          </p>
        ) : (
          <ul>
            {billItems.map(item => (
              <li key={item.entry}>
                <div className='row'>
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div className=''>
                    <p>{item.number}</p>
                  </div>
                  <div className=''>
                    <p>{item.location}</p>
                  </div>

                  <div className=''>
                    <p>{item.basePrice}</p>
                  </div>
                  <div className=''>
                    <p>{item.book}</p>
                  </div>
                  <div className=''>
                    <p>{item.startDate}</p>
                  </div>
                  <div>
                    <button
                      type='button'
                      onClick={() => removeBillHandler(item.entry)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='col-1'>
        <div className='card card-body'>
          <ul>
            <li>
              <button
                type='button'
                onClick={billSaveHandler}
                className='primary block'
                disabled={billItems.length === 0}
              >
                Save Bill
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BillScreen;
