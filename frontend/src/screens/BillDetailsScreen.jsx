import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsBill } from '../actions/createBillActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const BillDetailsScreen = props => {
  const billId = props.match.params.id;

  const billDetails = useSelector(state => state.billDetails);
  const { loading, error, bill } = billDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsBill(billId));
  }, [dispatch, billId]);
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant='danger'>{error}</MessageBox>
  ) : (
    <div>
      <h1>Bill {bill._id}</h1>
      <div className='row top'>
        <div className='col-2'>
          <div className='card card-body'>
            <ul>
              <li>
                <h2>Bill Items</h2>
                <ul>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>NAME</th>
                        <th>NUMBER</th>
                        <th>LOCATION</th>
                        <th>BASE PRICE</th>
                        <th>BOOKED BY</th>
                        <th>SHOW NAME</th>
                        {bill.extraKMS < 0 ? null : <th>EXTRA KMS</th>}
                        {bill.extraHRS < 0 ? null : <th>EXTRA HRS</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {bill.bills.map(bill => (
                        <tr key={bill._id}>
                          <td>{bill.name}</td>
                          <td>{bill.number}</td>
                          <td>{bill.location}</td>
                          <td>{bill.basePrice}</td>
                          <td>{bill.book}</td>
                          <td>{bill.show}</td>
                          <td>
                            {bill.extraKMS <= 0
                              ? '-'
                              : `${bill.extraKMS} (${
                                  bill.extraKMS
                                } x 14 = Rs. ${Math.round(
                                  bill.extraKMS * 14
                                )})`}
                          </td>
                          <td>
                            {bill.extraHRS <= 0
                              ? '-'
                              : `${bill.extraHRS} (${
                                  bill.extraHRS
                                } x 100 = Rs. ${Math.round(
                                  bill.extraHRS * 100
                                )})`}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <h2>Bill Summary</h2>
              </li>
              <li>
                <div className='row'>
                  <div>Sub Total</div>
                  <div>Rs.{bill.subTotal.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  {/* <div>Shipping</div>
                  <div>${order.shippingPrice.toFixed(2)}</div> */}
                </div>
              </li>
              <li>
                <div className='row'>
                  {/* <div>Tax</div>
                  <div>${order.taxPrice.toFixed(2)}</div> */}
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>{/* <strong> Order Total</strong> */}</div>
                  <div>
                    {/* <strong>${order.totalPrice.toFixed(2)}</strong> */}
                  </div>
                </div>
              </li>
              <li>
                <button>Print</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillDetailsScreen;