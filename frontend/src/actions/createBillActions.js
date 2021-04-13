import Axios from "axios";
import { BILL_EMPTY } from "../constants/billConstants";
import { BILL_CREATE_REQUEST, BILL_CREATE_SUCCESS, BILL_CREATE_FAIL } from '../constants/createBillConstants';

export const createBill = (bill) => async (dispatch, getState) => {
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
    dispatch({ type: BILL_CREATE_FAIL, payload: message })
  }
}
