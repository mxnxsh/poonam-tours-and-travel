import { BILL_CREATE_REQUEST, BILL_CREATE_SUCCESS, BILL_CREATE_FAIL, BILL_CREATE_RESET, ALL_BILL_REQUEST, ALL_BILL_SUCCESS, ALL_BILL_FAIL, BILL_DETAILS_REQUEST, BILL_DETAILS_SUCCESS, BILL_DETAILS_FAIL } from '../constants/createBillConstants';

export const billCreateReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case BILL_CREATE_REQUEST:
      return {
        loading: true
      }
    case BILL_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        bill: payload
      }
    case BILL_CREATE_FAIL:
      return {
        loading: false,
        error: payload
      }
    case BILL_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const allBillReducer = (state = { bills: [] }, { type, payload }) => {
  switch (type) {
    case ALL_BILL_REQUEST:
      return { loading: true }
    case ALL_BILL_SUCCESS:
      return { loading: false, bills: payload }
    case ALL_BILL_FAIL:
      return { loading: false, error: payload }
    default:
      return state;
  }
}
export const billDetailsReducer = (state = { loading: true, bill: {} }, { type, payload }) => {
  switch (type) {
    case BILL_DETAILS_REQUEST:
      return {
        loading: true
      }
    case BILL_DETAILS_SUCCESS:
      return {
        loading: false,
        bill: payload
      }
    case BILL_DETAILS_FAIL:
      return {
        loading: false,
        error: payload
      }
    default:
      return state
  }
}