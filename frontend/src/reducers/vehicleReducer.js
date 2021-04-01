const { VEHICLE_ENTRY_REQUEST, VEHICLE_ENTRY_SUCCESS, VEHICLE_ENTRY_FAIL, VEHICLE_DETAIL_REQUEST, VEHICLE_DETAIL_SUCCESS, VEHICLE_DETAIL_FAIL, VEHICLE_UPDATE_REQUEST, VEHICLE_UPDATE_SUCCESS, VEHICLE_UPDATE_FAIL, VEHICLE_DELETE_REQUEST, VEHICLE_DELETE_SUCCESS, VEHICLE_DELETE_FAIL, VEHICLE_DELETE_RESET, VEHICLE_REQUEST, VEHICLE_SUCCESS, VEHICLE_FAIL,VEHICLE_UPDATE_RESET } = require("../constants/adminConstants");

function vehicleEntryReducer(state = {}, { type, payload }) {
    switch (type) {
        case VEHICLE_ENTRY_REQUEST:
            return {
                loading: true,
            }
        case VEHICLE_ENTRY_SUCCESS:
            return {
                loading: false,
                vehicleInfo: payload,
                success: true
            }
        case VEHICLE_ENTRY_FAIL:
            return {
                loading: false,
                error: payload,
                success: false
            }
        default:
            return state;
    }
}

function vehicleDetailReducer(state = { vehicles: [] }, { type, payload }) {
    switch (type) {
        case VEHICLE_DETAIL_REQUEST:
            return {
                loading: true,
                vehicles: []
            }
        case VEHICLE_DETAIL_SUCCESS:
            return {
                loading: false,
                vehicles: payload
            }
        case VEHICLE_DETAIL_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
function vehicleReducer(state = { loading: true }, { type, payload }) {
    switch (type) {
        case VEHICLE_REQUEST:
            return { loading: true };
        case VEHICLE_SUCCESS:
            return { loading: false, vehicle: payload };
        case VEHICLE_FAIL:
            return { loading: false, error: payload };
        default:
            return state;
    }
};
function vehicleUpdateReducer(state = {}, { type, payload }) {
    switch (type) {
        case VEHICLE_UPDATE_REQUEST:
            return {
                loading: true,
                success: false
            }
        case VEHICLE_UPDATE_SUCCESS:
            return {
                loading: false,
                vehicle: payload,
                success: true,
            }
        case VEHICLE_UPDATE_FAIL:
            return {
                loading: false,
                error: payload,
                success: false
            }
        case VEHICLE_UPDATE_RESET:
            return{}
        default:
            return state
    }
}
const vehicleDeleteReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case VEHICLE_DELETE_REQUEST:
            return { loading: true };
        case VEHICLE_DELETE_SUCCESS:
            return { loading: false, success: true };
        case VEHICLE_DELETE_FAIL:
            return { loading: false, error: payload };
        case VEHICLE_DELETE_RESET:
            return {};
        default:
            return state;
    }
};
export {
    vehicleEntryReducer,
    vehicleDetailReducer,
    vehicleReducer,
    vehicleUpdateReducer,
    vehicleDeleteReducer
}