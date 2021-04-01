import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany } from '../actions/adminActions';
import LoadingBox from '../components/LoadingBox';

const CreateCompany = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCompany({ name, address, mobile, email }));
    setName('');
    setAddress('');
    setEmail('');
    setMobile('');
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
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className='row start'>
              <label style={{ color: 'black' }}>Company Address</label>
              <textarea
                type='text'
                name='address'
                value={address}
                placeholder='Enter Company Address'
                onChange={e => {
                  setAddress(e.target.value);
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
                onChange={e => {
                  setMobile(e.target.value);
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
