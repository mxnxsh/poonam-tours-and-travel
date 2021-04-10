import Axios from 'axios';
import { ADD_BILL, REMOVE_BILL, } from "../constants/billConstants";

export const addToBill = (entryId) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/booking-data/${entryId}`);
  dispatch({
    type: ADD_BILL,
    payload: {
      name: data.name,
      number: data.number,
      location: data.location,
      entry: data._id,
      basePrice: data.basePrice,
      book: data.book,
      startDate: data.startDate
    },
  });
  localStorage.setItem('billItems', JSON.stringify(getState().bill.billItems))
};

export const removeEntryFromBill = (entryId) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_BILL, payload: entryId })
  localStorage.setItem('billItems', JSON.stringify(getState().bill.billItems))
}