import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBookingData, getBookings } from '../actions/dataEntryActions';
import Card from './Card';
import Table from './Table';
const Main = () => {
  const dispatch = useDispatch();
  const bookingDetails = useSelector(state => state.bookingDetails);
  const { entries } = bookingDetails;

  const deleteEntry = useSelector(state => state.deleteEntry);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = deleteEntry;
  console.log(loadingDelete, successDelete, errorDelete);
  const deleteHandler = entry => {
    dispatch(deleteBookingData(entry._id));
  };
  useEffect(() => {
    dispatch(getBookings());
  }, [dispatch, successDelete]);
  return (
    <div className='main'>
      <div className='row space-between'>
        <Card number='859' content='Demo user' link='/' />
        <Card number='119' content='Demo user' link='/' />
        <Card number='229' content='Demo user' link='/' />
        <Card number='8259' content='Demo user' link='/' />
      </div>
      <div className='row center inputBox'>
        <input type='text' name='' id='' />
        <button>Search</button>
      </div>
      <Table entries={entries} onDelete={deleteHandler} />
    </div>
  );
};

export default Main;
