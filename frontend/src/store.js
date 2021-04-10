import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { billReducer } from './reducers/billReducer';

import { companyDeleteReducer, companyDetailReducer, companyEntryReducer, companyReducer, companyUpdateReducer } from './reducers/companyReducer';
import { bookingDeleteReducer, bookingDetailReducer, bookingDetailsReducer, bookingEntryReducer, bookingUpdateReducer } from './reducers/dataEntryReducer';
import { vehicleDeleteReducer, vehicleDetailReducer, vehicleEntryReducer, vehicleReducer, vehicleUpdateReducer } from './reducers/vehicleReducer';

const initialState = {
    // vehicles: [],
    // customers: [],
    // entries: []
    bill: {
        billItems: localStorage.getItem('billItems')
            ? JSON.parse(localStorage.getItem('billItems'))
            : [],
    },
};
const reducer = combineReducers({
    vehicleEntry: vehicleEntryReducer,
    vehicleDetails: vehicleDetailReducer,
    vehicleDetail: vehicleReducer,
    updateVehicle: vehicleUpdateReducer,
    deleteVehicle: vehicleDeleteReducer,

    customerEntry: companyEntryReducer,
    companyDetails: companyDetailReducer,
    companyDetail: companyReducer,
    companyUpdate: companyUpdateReducer,
    companyDelete: companyDeleteReducer,

    bookingEntry: bookingEntryReducer,
    bookingDetails: bookingDetailsReducer,
    bookingDetail: bookingDetailReducer,
    editEntry: bookingUpdateReducer,
    deleteEntry: bookingDeleteReducer,

    bill: billReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;