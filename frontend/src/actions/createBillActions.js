import Axios from "axios";
import { BILL_EMPTY } from "../constants/billConstants";
import { BILL_CREATE_REQUEST, BILL_CREATE_SUCCESS, BILL_CREATE_FAIL, ALL_BILL_REQUEST, ALL_BILL_SUCCESS, ALL_BILL_FAIL, BILL_DETAILS_REQUEST, BILL_DETAILS_SUCCESS, BILL_DETAILS_FAIL } from '../constants/createBillConstants';

export const createBill = (bill) => async (dispatch) => {
  dispatch({ type: BILL_CREATE_REQUEST, payload: bill })
  try {
    const { data } = await Axios.post('/api/bill', bill);
    dispatch({ type: BILL_CREATE_SUCCESS, payload: data.bill });
    dispatch({ type: BILL_EMPTY });
    localStorage.removeItem('billItems');
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    dispatch({ type: BILL_CREATE_FAIL, payload: message });
  }
}

export const fetchAllBills = ({ billName = '' }) => async (dispatch) => {
  // console.log("actionBillname=>", billName);
  dispatch({ type: ALL_BILL_REQUEST });
  try {
    const { data } = await Axios.get(`/api/bill/all-bills?billName=${billName}`);
    dispatch({ type: ALL_BILL_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: ALL_BILL_FAIL, payload: message });
  }
}
export const detailsBill = (billId) => async (dispatch) => {
  dispatch({ type: BILL_DETAILS_REQUEST, payload: billId });
  try {
    const { data } = await Axios.get(`/api/bill/${billId}`);
    dispatch({ type: BILL_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: BILL_DETAILS_FAIL, payload: message });
  }
}
