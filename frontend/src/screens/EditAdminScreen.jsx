import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCompanyDetails, getvehicleDetails } from '../actions/adminActions';
import { editBookingData, getBooking } from '../actions/dataEntryActions';
import LoadingBox from '../components/LoadingBox';
import { DATA_EDIT_RESET } from '../constants/dataEntryConstants.js';

const EditAdminScreen = props => {
  const entryId = props.match.params.id;

  const [name, setName] = useState('');
  const [ownerName, setOwnerName] = useState();
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  // const [fuel, setFuel] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [basePrice, setBasePrice] = useState('');
  const [driver, setDriver] = useState('');
  const [show, setShow] = useState('');
  const [book, setBook] = useState('');
  const [extraHRS, setExtraHRS] = useState(0);
  const [extraKMS, setExtraKMS] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [input, setInput] = useState('');
  const [customerInput, setCustomerInput] = useState('');

  const dispatch = useDispatch();

  const vehicleDetails = useSelector(state => state.vehicleDetails);
  const { vehicles } = vehicleDetails;

  const companyDetails = useSelector(state => state.companyDetails);
  const { companies } = companyDetails;

  const bookingDetail = useSelector(state => state.bookingDetail);
  const { loading, error, entry } = bookingDetail;

  const editEntry = useSelector(state => state.editEntry);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = editEntry;
  useEffect(() => {
    dispatch(getvehicleDetails());
    dispatch(getCompanyDetails());
    if (successUpdate) {
      props.history.push('/admin/show-entries');
    }
    if (!entry || entry._id !== entryId || successUpdate) {
      dispatch({ type: DATA_EDIT_RESET });
      dispatch(getBooking(entryId));
    } else {
      setName(entry.name);
      setOwnerName(entry.ownerName);
      setNumber(entry.number);
      setLocation(entry.location);
      // setFuel(entry.fuel);
      setVehicleType(entry.vehicleType);
      setBasePrice(entry.basePrice);
      setDriver(entry.driver);
      setShow(entry.show);
      setBook(entry.book);
      setExtraKMS(entry.extraKMS);
      setExtraHRS(entry.extraHRS);
      setStartDate(entry.startDate);
      setCustomerInput(entry.name);
    }
  }, [dispatch, entryId, entry, props.history, successUpdate]);

  const handleClick = e => {
    e.preventDefault();
    setNumber(input);
    // setInput('');
  };

  const handleCustomerClick = e => {
    e.preventDefault();
    setName(customerInput);
    // setCustomerInput('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      editBookingData({
        _id: entryId,
        name,
        ownerName,
        number,
        location,
        // fuel,
        vehicleType,
        basePrice,
        driver,
        show,
        book,
        extraKMS,
        extraHRS,
        startDate,
      })
    );
    // setName('');
    // setOwnerName('');
    // setNumber('');
    // setLocation('');
    // setFuel('');
    // setVehicleType('');
    // setBasePrice('');
    // setDriver('');
    // setShow('');
    // setBook('');
    // setStartDate('');
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
            <div className='flex'>
              <h1 style={{ color: '#000' }}>EDIT ENTRY</h1>
              <input
                style={{ border: 'none', fontSize: '2rem' }}
                type='text'
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                name='startDate'
              />
            </div>
            <div className='flex'>
              <div>
                <label>Vehicle Number</label>
                <select
                  value={number}
                  onChange={e => {
                    setNumber(e.target.value);
                  }}
                >
                  <option selected hidden defaultValue>
                    Vehicle Number
                  </option>
                  {!vehicles ? (
                    <option>No Vehicle found</option>
                  ) : (
                    vehicles.map(vehicle => {
                      return (
                        <option key={vehicle._id}>{vehicle.number}</option>
                      );
                    })
                  )}
                  <option>Others</option>
                </select>
              </div>
              <div>
                <input
                  style={{ marginTop: '35px' }}
                  placeholder='Enter Vehicle Number Manually'
                  type='text'
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  name='customerInput'
                />
              </div>
              {/* <input
                style={{ marginTop: '35px' }}
                placeholder='Enter Owner Name'
                type='text'
                value={ownerName}
                onChange={e => setOwnerName(e.target.ownerName)}
                name='ownerName'
              /> */}
              <div>
                <button
                  style={{ marginTop: '35px' }}
                  onClick={handleClick}
                  className='primary'
                >
                  Add Vehicle
                </button>
              </div>
            </div>
            <div className='flex'>
              <div>
                <label>Company Name</label>
                <select
                  value={name}
                  onChange={e => {
                    setName(e.target.value);
                  }}
                >
                  <option selected hidden defaultValue>
                    Company Name
                  </option>
                  {!companies ? (
                    <option>No Company found</option>
                  ) : (
                    companies.map(company => {
                      return <option key={company._id}>{company.name}</option>;
                    })
                  )}
                  <option>Others</option>
                </select>
              </div>
              <div>
                <input
                  style={{ marginTop: '35px' }}
                  placeholder='Enter Company Name Manually'
                  type='text'
                  value={customerInput}
                  onChange={e => {
                    setCustomerInput(e.target.value);
                  }}
                  name='input'
                />
              </div>
              <div>
                <button
                  style={{ marginTop: '35px' }}
                  onClick={handleCustomerClick}
                  className='primary'
                >
                  Add Company
                </button>
              </div>
            </div>

            <div>
              <label>Enter From-To</label>
              <input
                placeholder='Enter From-To'
                style={{ width: '80%' }}
                type='text'
                name='location'
                value={location}
                onChange={e => {
                  setLocation(e.target.value);
                }}
              />
            </div>
            {/* <div>
              <label>Fuel Type</label>
              <select
                value={fuel}
                onChange={e => {
                  setFuel(e.target.value);
                }}
                style={{ width: '84%' }}
              >
                <option selected hidden default>
                  Fuel
                </option>
                <option>Petrol</option>
                <option>Diesel</option>
              </select>
            </div> */}
            <div>
              <label>Driver Name</label>
              <input
                type='text'
                name='driver'
                style={{ width: '80%' }}
                value={driver}
                placeholder='Enter Driver Name'
                onChange={e => {
                  setDriver(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Book By</label>
              <input
                type='text'
                name='book'
                style={{ width: '80%' }}
                value={book}
                placeholder='Enter Booking Person Name'
                onChange={e => {
                  setBook(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Vehicle Type</label>
              <select
                value={vehicleType}
                onChange={e => {
                  setVehicleType(e.target.value);
                }}
                style={{ width: '84%' }}
              >
                <option hidden>Vehicle Type</option>
                <option disabled>TEMPOS</option>
                <option>PICKUP/TATA ACE</option>
                <option>407 (14FT)</option>
                <option>909 (17FT)</option>
                <option>1109 (18FT)</option>
                <option>1109 (19FT)</option>
                <option>1109 (20FT)</option>
                <option disabled>CARS</option>
                <option>INNOVA</option>
                <option>INNOVA CRYSTA</option>
                <option>DZIRE/YARIS</option>
              </select>
            </div>
            <div>
              <label>Base Price</label>
              <input
                type='text'
                name='basePrice'
                style={{ width: '80%' }}
                value={basePrice}
                placeholder='Base Price'
                onChange={e => setBasePrice(e.target.value)}
              />
            </div>
            <div>
              <label>Show Name</label>
              <input
                type='text'
                name='show'
                style={{ width: '80%' }}
                value={show}
                placeholder='Enter Show Name'
                onChange={e => {
                  setShow(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Extra KMS</label>
              <input
                type='number'
                name='extraKMS'
                style={{ width: '80%' }}
                value={extraKMS}
                placeholder='Extra KMS'
                onChange={e => {
                  setExtraKMS(e.target.value);
                }}
              />
            </div>
            <div>
              <label>Extra HRS</label>
              <input
                type='number'
                name='extraHRS'
                style={{ width: '80%' }}
                value={extraHRS}
                placeholder='Extra HRS'
                onChange={e => {
                  setExtraHRS(e.target.value);
                }}
              />
            </div>
            <div>
              <button className='primary' type='submit'>
                Update Entry
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditAdminScreen;
