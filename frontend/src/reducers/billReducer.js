import { ADD_BILL, BILL_EMPTY, REMOVE_BILL } from '../constants/billConstants'

export const billReducer = (state = { billItems: [] }, { type, payload }) => {
  switch (type) {
    case ADD_BILL:
      const item = payload;
      const existItem = state.billItems.find(x => x.entry === item.entry);
      if (existItem) {
        return {
          ...state,
        }
        // ...state,
        // cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
      } else {
        return {
          ...state,
          billItems: [...state.billItems, item]
        }
      }
    case REMOVE_BILL:
      return {
        ...state,
        billItems: state.billItems.filter(x => x.entry !== payload)
      }
    case BILL_EMPTY:
      return {
        ...state,
        billItems: []
      }
    default:
      return state;
  }
}