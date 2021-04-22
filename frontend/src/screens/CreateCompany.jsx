import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany } from '../actions/adminActions';
import LoadingBox from '../components/LoadingBox';

const CreateCompany = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [GSTNumber, setGSTNumber] = useState('');
  const [panCard, setPanCard] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCompany({ name, address, mobile, email, GSTNumber, panCard }));
    setName('');
    setAddress('');
    setEmail('');
    setMobile('');
    setGSTNumber('');
    setPanCard('');
  };

  const customerEntry = useSelector(state => state.customerEntry);
  const {
    loading: loadingCustomer,
    success: successCustomer,
    error: errorCustomer,
    customerInfo,
  } = customerEntry;

  useEffect(() => {
    if (successCustomer) {
      // alert(`${customerInfo.name} is successfully added`);
    }
  }, [successCustomer, customerInfo]);
  return (
    <>
      {loadingCustomer ? (
        <LoadingBox></LoadingBox>
      ) : errorCustomer ? (
        <p>{errorCustomer}</p>
      ) : (
        <div className='row center'>
          <form className='form' onSubmit={handleSubmit}>
            <div>
              <h1 className='center' style={{ color: 'black' }}>
                Company Entry
              </h1>
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>Name</label>
              <input
                type='text'
                name='name'
                value={name}
                placeholder='Enter Company Name'
                style={{ width: '89%' }}
                onChange={e => {
                  setName(e.target.value.toUpperCase());
                }}
              />
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>Company Address</label>
              <textarea
                type='text'
                name='address'
                value={address}
                cols='50'
                rows='5'
                style={{ border: '1px solid black' }}
                placeholder='Enter Company Address'
                onChange={e => {
                  setAddress(e.target.value.toUpperCase());
                }}
              />
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>Company Mobile No</label>
              <input
                type='number'
                name='mobile'
                value={mobile}
                placeholder='Enter Company Mobile Number'
                style={{ width: '89%' }}
                onChange={e => {
                  setMobile(e.target.value);
                }}
              />
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>GST Number</label>
              <input
                type='text'
                name='GSTNumber'
                value={GSTNumber}
                placeholder='Enter GST Number'
                style={{ width: '89%' }}
                onChange={e => {
                  setGSTNumber(e.target.value.toUpperCase());
                }}
              />
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>Pan Card Number</label>
              <input
                type='text'
                name='panCard'
                value={panCard}
                placeholder='Enter PAN Card Number'
                style={{ width: '89%' }}
                onChange={e => {
                  setPanCard(e.target.value.toUpperCase());
                }}
              />
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>Email Id</label>
              <input
                type='email'
                name='email'
                value={email}
                placeholder='Enter Company Email'
                style={{ width: '89%' }}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <button className='primary' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateCompany;
