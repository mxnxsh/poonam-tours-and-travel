import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllBills } from '../actions/createBillActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const AllBillScreen = props => {
  const allBills = useSelector(state => state.allBills);
  const { loading, error, bills } = allBills;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBills());
  }, [dispatch]);
  return (
    <div>
      <h1>Bills History</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : bills.length === 0 ? (
        <MessageBox>
          No bills history {<Link to='/'>Create Bill</Link>}
        </MessageBox>
      ) : (
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>NAME</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {bills.map(bill => (
              <tr key={bill._id}>
                <td>{bill._id}</td>

                <td>{bill.createdAt.substring(0, 10)}</td>

                {/* <td>${bill.totalPrice.toFixed(2)}</td> */}
                <td>Rs.{bill.subTotal}</td>
                <td>Manish</td>

                <td>
                  <button
                    type='button'
                    className='small'
                    onClick={() => {
                      props.history.push(`/bill/${bill._id}`);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default AllBillScreen;
