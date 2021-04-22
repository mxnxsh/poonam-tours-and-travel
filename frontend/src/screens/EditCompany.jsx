import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailCompany, updateCompany } from '../actions/adminActions';
import LoadingBox from '../components/LoadingBox';
import { COMPANY_UPDATE_RESET } from '../constants/adminConstants';

const EditCompany = props => {
  const companyId = props.match.params.id;
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [GSTNumber, setGSTNumber] = useState('');
  const [panCard, setPanCard] = useState('');

  const dispatch = useDispatch();

  const companyDetail = useSelector(state => state.companyDetail);
  const { loading, error, company } = companyDetail;
  const companyUpdate = useSelector(state => state.companyUpdate);

  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = companyUpdate;

  useEffect(() => {
    if (successUpdate) {
      props.history.push('/admin/show-companies');
    }
    if (!company || company._id !== companyId || successUpdate) {
      dispatch({ type: COMPANY_UPDATE_RESET });
      dispatch(detailCompany(companyId));
    } else {
      setName(company.name);
      setAddress(company.address);
      setEmail(company.email);
      setMobile(company.mobile);
      setGSTNumber(company.GSTNumber);
      setPanCard(company.panCard);
    }
  }, [dispatch, company, companyId, props.history, successUpdate]);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateCompany({
        _id: companyId,
        name,
        address,
        email,
        mobile,
        GSTNumber,
        panCard,
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
                Edit Company
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
                placeholder='Enter Company Mobile Number'
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
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EditCompany;
