import { DATA_DELETE_FAIL, DATA_DELETE_REQUEST, DATA_DELETE_RESET, DATA_DELETE_SUCCESS, DATA_DETAILS_FAIL, DATA_DETAILS_REQUEST, DATA_DETAILS_SUCCESS, DATA_DETAIL_FAIL, DATA_DETAIL_REQUEST, DATA_DETAIL_SUCCESS, DATA_ENTRY_FAIL, DATA_ENTRY_REQUEST, DATA_ENTRY_SUCCESS, DATA_EDIT_REQUEST, DATA_EDIT_SUCCESS, DATA_EDIT_FAIL, DATA_EDIT_RESET } from "../constants/dataEntryConstants";

function bookingDetailsReducer(state = { entries: [] }, { type, payload }) {
    switch (type) {
        case DATA_DETAILS_REQUEST:
            return { loading: true }
        case DATA_DETAILS_SUCCESS:
            return {
                loading: false,
                entries: payload
            }
        case DATA_DETAILS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}
function bookingDetailReducer(state = { loading: true }, { type, payload }) {
    switch (type) {
        case DATA_DETAIL_REQUEST:
            return { loading: true }
        case DATA_DETAIL_SUCCESS:
            return { loading: false, entry: payload }
        case DATA_DETAIL_FAIL:
            return { loading: false, error: payload }
        default:
            return state;
    }
}

function bookingEntryReducer(state = {}, { type, payload }) {
    switch (type) {
        case DATA_ENTRY_REQUEST:
            return {
                loading: true,
            }
        case DATA_ENTRY_SUCCESS:
            return {
                loading: false,
                entry: payload
            }
        case DATA_ENTRY_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

function bookingDeleteReducer(state = { entries: {} }, { type, payload }) {
    switch (type) {
        case DATA_DELETE_REQUEST:
            return { loading: true }
        case DATA_DELETE_SUCCESS:
            return { loading: false, success: true }
        case DATA_DELETE_FAIL:
            return { loading: false, error: payload }
        case DATA_DELETE_RESET:
            return {}
        default:
            return state;
    }
}
function bookingUpdateReducer(state = {}, { type, payload }) {
    switch (type) {
        case DATA_EDIT_REQUEST:
            return { loading: true, success: false }
        case DATA_EDIT_SUCCESS:
            return { loading: false, success: true, entry: payload }
        case DATA_EDIT_FAIL:
            return { loading: false, error: payload }
        case DATA_EDIT_RESET:
            return {}
        default:
            return state;
    }
}



export {
    bookingDetailsReducer,
    bookingDetailReducer,
    bookingEntryReducer,
    bookingUpdateReducer,
    bookingDeleteReducer
}