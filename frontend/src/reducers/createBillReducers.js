import { BILL_CREATE_REQUEST, BILL_CREATE_SUCCESS, BILL_CREATE_FAIL, BILL_CREATE_RESET } from '../constants/createBillConstants';

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