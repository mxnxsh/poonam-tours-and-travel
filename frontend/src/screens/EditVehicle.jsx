import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, updateVehicle } from '../actions/adminActions';
import LoadingBox from '../components/LoadingBox';
import { VEHICLE_UPDATE_RESET } from '../constants/adminConstants';

const EditVehicle = props => {
  const vehicleId = props.match.params.id;
  const [number, setNumber] = useState('');
  const [basePrice, setBasePrice] = useState(3500);

  const dispatch = useDispatch();

  const vehicleDetail = useSelector(state => state.vehicleDetail);
  const { loading, error, vehicle } = vehicleDetail;
  const vehicleUpdate = useSelector(state => state.updateVehicle);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = vehicleUpdate;
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/admin/show-vehicles');
    }

    if (!vehicle || vehicle._id !== vehicleId || successUpdate) {
      dispatch({ type: VEHICLE_UPDATE_RESET });
      dispatch(getDetail(vehicleId));
    } else {
      setNumber(vehicle.number);
      setBasePrice(vehicle.basePrice);
    }
  }, [dispatch, vehicleId, vehicle, successUpdate, props.history]);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateVehicle({
        _id: vehicleId,
        number,
        basePrice,
      })
      );
      
  };
  return (
    <>
      {loadingUpdate && <LoadingBox></LoadingBox>}
      {errorUpdate && <p>{errorUpdate}</p>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className='row center'>
          <form className='form' onSubmit={handleSubmit}>
            <div>
              <h1 className='center' style={{ color: 'black' }}>
                Edit Vehicle {vehicleId}
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
                Update Vehicle
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditVehicle;
