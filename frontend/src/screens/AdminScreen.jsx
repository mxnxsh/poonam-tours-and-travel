import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { getCompanyDetails, getvehicleDetails } from '../actions/adminActions';
import { bookingData, getBookings } from '../actions/dataEntryActions';

const AdminScreen = () => {
  const { name1 = 'all' } = useParams();

  // const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  // const [ownerName, setOwnerName] = useState();
  const [number, setNumber] = useState('');
  const [location, setLocation] = useState('');
  // const [fuel, setFuel] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [basePrice, setBasePrice] = useState(3500);
  const [driver, setDriver] = useState('');
  const [show, setShow] = useState('');
  const [book, setBook] = useState('');
  const [extraHRS] = useState(0);
  const [extraKMS] = useState(0);
  const [startDate, setStartDate] = useState(
    new Date().getDate() +
      '/' +
      (new Date().getMonth() + 1) +
      '/' +
      new Date().getFullYear()
  );

  const [input, setInput] = useState('');
  const [customerInput, setCustomerInput] = useState('');
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  const vehicleDetails = useSelector(state => state.vehicleDetails);
  const {
    vehicles,
    loading: loadingVehicle,
    error: errorVehicle,
  } = vehicleDetails;
  const companyDetails = useSelector(state => state.companyDetails);
  const { companies, loading, error } = companyDetails;

  useEffect(() => {
    dispatch(getvehicleDetails());
    dispatch(getCompanyDetails());
    dispatch(
      getBookings({
        name1: name1 !== 'all' ? name1 : '',
      })
    );
  }, [dispatch, name1]);

  const handleClick = e => {
    e.preventDefault();
    setNumber(input);
    setInput('');
  };

  const handleCustomerClick = e => {
    e.preventDefault();
    setName(customerInput);
    setCustomerInput('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      bookingData({
        name,
        // ownerName,
        number,
        location,
        // fuel,
        vehicleType,
        basePrice,
        driver,
        show,
        book,
        startDate,
        extraHRS,
        extraKMS,
        // startDate,
        // endDate,
      })
    );
    setName('');
    // setOwnerName('')
    setNumber('');
    setLocation('');
    // setFuel('');
    setVehicleType('');
    setBasePrice('');
    setDriver('');
    setShow('');
    setBook('');
    setStartDate(
      new Date().getDate() +
        '/' +
        (new Date().getMonth() + 1) +
        '/' +
        new Date().getFullYear()
    );
  };
  return (
    <div className='row center'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='flex'>
          <h1 style={{ color: '#000' }}>Enter Data</h1>
          {/* <DatePicker
            dateFormat='yyyy/MM/dd'
            ={startDate}
            onChange={date => setStartDate(date)}
            id='none'
          /> */}
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
              <option hidden defaultValue>
                Vehicle Number
              </option>
              <option disabled>Vehicles Number</option>
              {loadingVehicle ? (
                <option>Loading...</option>
              ) : errorVehicle ? (
                <option>{errorVehicle}</option>
              ) : (
                vehicles.map(vehicle => {
                  return <option key={vehicle._id}>{vehicle.number}</option>;
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
              <option hidden defaultValue>
                Company Name
              </option>
              <option disabled>Companies Name</option>

              {loading ? (
                <option>Loading...</option>
              ) : error ? (
                <option>{error}</option>
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
            <option hidden default>
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
        {/* <div>
          <label>Vehicle Type</label>
          <input
            type='text'
            name='vehicleType'
            style={{ width: '80%' }}
            value={vehicleType}
            placeholder='Vehicle Type'
            onChange={e => setVehicleType(e.target.value)}
          />
        </div> */}
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
        {/* <div>
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
        </div> */}
        <div>
          <button className='primary' type='submit'>
            Create Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminScreen;
