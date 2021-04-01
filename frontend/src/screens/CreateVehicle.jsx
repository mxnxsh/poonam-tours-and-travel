import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addVehicle } from '../actions/adminActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const CreateVehicle = () => {
  const [number, setNumber] = useState('');
  const [basePrice, setBasePrice] = useState(3500);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addVehicle({ number, basePrice }));
    setNumber('');
    setBasePrice();
  };

  const vehicleEntry = useSelector(state => state.vehicleEntry);
  const {
    loading: loadingVehicle,
    success: successVehicle,
    error: errorVehicle,
    vehicleInfo,
  } = vehicleEntry;

  // if (vehicleInfo) {
  //   alert('we');
  // }
  // useEffect(() => {

  // }, [successVehicle]);

  return (
    <>
      {loadingVehicle ? (
        <LoadingBox></LoadingBox>
      ) : errorVehicle ? (
        <p>{errorVehicle}</p>
      ) : (
        <div className='row center'>
          <form className='form w-9' onSubmit={handleSubmit}>
            <div>
              <h1 className='center' style={{ color: 'black' }}>
                Vehicle Entry
              </h1>
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>Vehicle Number</label>
              <input
                type='text'
                name='number'
                value={number}
                placeholder='Enter Vehicle Number'
                onChange={e => {
                  setNumber(e.target.value);
                }}
              />
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>Base Price</label>
              <input
                type='number'
                name='basePrice'
                value={basePrice}
                placeholder='Enter Base Price'
                onChange={e => {
                  setBasePrice(e.target.value);
                }}
              />
            </div>
            <div>
              <button className='primary' type='submit'>
                Submit Entry
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateVehicle;
