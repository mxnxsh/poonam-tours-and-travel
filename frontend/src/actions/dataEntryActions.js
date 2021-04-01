import Axios from 'axios';
import { toast } from 'react-toastify';
import { DATA_DELETE_FAIL, DATA_DELETE_REQUEST, DATA_DELETE_SUCCESS, DATA_DETAILS_FAIL, DATA_DETAILS_REQUEST, DATA_DETAILS_SUCCESS, DATA_DETAIL_FAIL, DATA_DETAIL_REQUEST, DATA_DETAIL_SUCCESS, DATA_EDIT_FAIL, DATA_EDIT_REQUEST, DATA_EDIT_SUCCESS, DATA_ENTRY_FAIL, DATA_ENTRY_REQUEST, DATA_ENTRY_SUCCESS } from "../constants/dataEntryConstants"


const getBookings = () => async (dispatch) => {
    dispatch({
        type: DATA_DETAILS_REQUEST
    })
    try {
        const { data } = await Axios.get('/api/booking-data');
        dispatch({
            type: DATA_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: DATA_DETAILS_FAIL,
            payload: error
        });
    }
}
const getBooking = (entryId) => async (dispatch) => {
    dispatch({
        type: DATA_DETAIL_REQUEST,
    })
    try {
        const { data } = await Axios.get(`/api/booking-data/${entryId}`);
        dispatch({
            type: DATA_DETAIL_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: DATA_DETAIL_FAIL,
            payload: error
        });
    }
}

const bookingData = (
    {
        name,
        ownerName,
        number,
        location,
        fuel,
        vehicleType,
        basePrice,
        driver,
        show,
        book,
        startDate, }
) => async (dispatch) => {
    dispatch({ type: DATA_ENTRY_REQUEST })
    try {
        const { data } = Axios.post('/api/booking-data', {
            name,
            ownerName,
            number,
            location,
            fuel,
            vehicleType,
            basePrice,
            driver,
            show,
            book,
            startDate,
        });
        dispatch({ type: DATA_ENTRY_SUCCESS, payload: data })
        toast.success(`Entry Added successfully`)
    } catch (error) {
        dispatch({
            type: DATA_ENTRY_FAIL,
            payload: error.message
        })
        toast.error(`${error.message}`)
    }
}

const deleteBookingData = (bookingId) => async (dispatch) => {
    try {
        dispatch({ type: DATA_DELETE_REQUEST, payload: bookingId });
        const { data } = await Axios.delete('/api/booking-data/' + bookingId);
        dispatch({ type: DATA_DELETE_SUCCESS, payload: data, success: true });
        toast.success(`Entry Deleted successfully`)
    } catch (error) {
        dispatch({ type: DATA_DELETE_FAIL, payload: error.message });
        toast.error(`${error.message}`)
    }
};

const editBookingData = (booking) => async (dispatch) => {
    try {
        dispatch({ type: DATA_EDIT_REQUEST, payload: booking });
        const { data } = await Axios.put(`/api/booking-data/${booking._id}`, booking);
        dispatch({ type: DATA_EDIT_SUCCESS, payload: data });
        toast.success(`Entry Updated successfully`)
    } catch (error) {
        dispatch({ type: DATA_EDIT_FAIL, payload: error.message });
        toast.error(`${error.message}`)
    }
}

export {
    bookingData,
    getBookings,
    getBooking,
    deleteBookingData,
    editBookingData
}