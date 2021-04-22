import Axios from 'axios';
import { toast } from 'react-toastify'

import { COMPANY_DELETE_FAIL, COMPANY_DELETE_REQUEST, COMPANY_DELETE_SUCCESS, COMPANY_DETAIL_FAIL, COMPANY_DETAIL_REQUEST, COMPANY_DETAIL_SUCCESS, COMPANY_ENTRY_FAIL, COMPANY_ENTRY_REQUEST, COMPANY_ENTRY_SUCCESS, COMPANY_FAIL, COMPANY_REQUEST, COMPANY_SUCCESS, COMPANY_UPDATE_FAIL, COMPANY_UPDATE_REQUEST, COMPANY_UPDATE_SUCCESS, VEHICLE_DELETE_FAIL, VEHICLE_DELETE_REQUEST, VEHICLE_DELETE_SUCCESS, VEHICLE_DETAIL_FAIL, VEHICLE_DETAIL_REQUEST, VEHICLE_DETAIL_SUCCESS, VEHICLE_ENTRY_FAIL, VEHICLE_ENTRY_REQUEST, VEHICLE_ENTRY_SUCCESS, VEHICLE_FAIL, VEHICLE_REQUEST, VEHICLE_SUCCESS, VEHICLE_UPDATE_FAIL, VEHICLE_UPDATE_REQUEST, VEHICLE_UPDATE_SUCCESS } from "../constants/adminConstants"

/**
 * 
 * Get 1 Vechicle
 */
const getDetail = (vehicleId) => async (dispatch) => {
    dispatch({
        type: VEHICLE_REQUEST,
    });
    try {
        const { data } = await Axios.get(`/api/vehicle-data/${vehicleId}`);
        dispatch({
            type: VEHICLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: VEHICLE_FAIL,
            payload: error
        });
    }
}
/**
 * 
 * Get all Vechicles 
 */
const getvehicleDetails = () => async (dispatch) => {
    dispatch({
        type: VEHICLE_DETAIL_REQUEST,
    });
    try {
        const { data } = await Axios.get('/api/vehicle-data');
        dispatch({
            type: VEHICLE_DETAIL_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: VEHICLE_DETAIL_FAIL,
            payload: error
        });
    }
}

/**
 * 
 * Post Vechicles 
 */
const addVehicle = ({ number, basePrice }) => async (dispatch) => {
    dispatch({
        type: VEHICLE_ENTRY_REQUEST,
        payload: { number, basePrice }
    });
    try {
        const { data } = await Axios.post('/api/vehicle-data', { number, basePrice });
        dispatch({
            type: VEHICLE_ENTRY_SUCCESS,
            payload: data
        })
        toast.success(`Vehicle added successfully`);
    } catch (error) {
        dispatch({
            type: VEHICLE_ENTRY_FAIL,
            payload: error.message
        });
        toast.error(`${error.message}`);

    }
}
/**
 * 
 * Edit Vechicle 
 */

const updateVehicle = (vehicle) => async (dispatch) => {
    dispatch({ type: VEHICLE_UPDATE_REQUEST, payload: vehicle })
    try {
        const { data } = await Axios.put(`/api/vehicle-data/${vehicle._id}`, vehicle)
        dispatch({ type: VEHICLE_UPDATE_SUCCESS, payload: data })
        toast.success(`Vehicle updated successfully`);
    } catch (error) {
        dispatch({ type: VEHICLE_UPDATE_FAIL, payload: error.message })
        toast.error(`${error.message}`);
    }
}
/**
 * 
 * Delete Vechicle 
 */

const deleteVehicle = (vehicleId) => async (dispatch) => {
    dispatch({
        type: VEHICLE_DELETE_REQUEST,
        payload: vehicleId
    });
    try {
        const { data } = await Axios.delete(`/api/vehicle-data/${vehicleId}`);
        dispatch({
            type: VEHICLE_DELETE_SUCCESS,
            payload: data
        });
        toast.success(`Vehicle deleted successfully`);
    } catch (error) {
        dispatch({
            type: VEHICLE_DELETE_FAIL,
            payload: error.message
        });
        toast.error(`${error.message}`);
    }
}
/**
 * 
 * Get all Companies 
 */
const getCompanyDetails = () => async (dispatch) => {
    dispatch({
        type: COMPANY_DETAIL_REQUEST,
    });
    try {
        const { data } = await Axios.get('/api/company-data');
        dispatch({
            type: COMPANY_DETAIL_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: COMPANY_DETAIL_FAIL,
            payload: error
        });
    }
}
/**
 * 
 * Post Company
 */
const addCompany = ({ name, address, mobile, email, GSTNumber, panCard }) => async (dispatch) => {
    dispatch({
        type: COMPANY_ENTRY_REQUEST,
        payload: { name, address, mobile, email, GSTNumber, panCard }
    });
    try {
        const { data } = await Axios.post('/api/company-data', { name, address, mobile, email, GSTNumber, panCard });
        dispatch({
            type: COMPANY_ENTRY_SUCCESS,
            payload: data
        });
        toast.success(`Company added successfully`);
    } catch (error) {
        dispatch({
            type: COMPANY_ENTRY_FAIL,
            payload: error.message
        });
        toast.error(`${error.message}`);
    }
}
/**
 * 
 * Get detail of 1 Company
 */
const detailCompany = (companyId) => async (dispatch) => {
    dispatch({
        type: COMPANY_REQUEST,
    });
    try {
        const { data } = await Axios.get(`/api/company-data/${companyId}`);
        dispatch({
            type: COMPANY_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: COMPANY_FAIL,
            payload: error.message
        });
    }
}
/**
 * 
 * Update Company
 */
const updateCompany = (company) => async (dispatch) => {
    dispatch({ type: COMPANY_UPDATE_REQUEST, payload: company })
    try {
        const { data } = await Axios.put(`/api/company-data/${company._id}`, company)
        dispatch({ type: COMPANY_UPDATE_SUCCESS, payload: data })
        toast.success(`Company updated successfully`);
    } catch (error) {
        dispatch({ type: COMPANY_UPDATE_FAIL, payload: error.message })
        toast.error(`${error.message}`);
    }
}

/**
 * 
 * Delete Company
 */

const deleteCompany = (companyId) => async (dispatch) => {
    dispatch({
        type: COMPANY_DELETE_REQUEST,
        payload: companyId
    });
    try {
        const { data } = await Axios.delete(`/api/company-data/${companyId}`);
        dispatch({
            type: COMPANY_DELETE_SUCCESS,
            payload: data
        });
        toast.success(`Company deleted successfully`);
    } catch (error) {
        dispatch({
            type: COMPANY_DELETE_FAIL,
            payload: error.message
        });
        toast.error(`${error.message}`);
    }
}
export {
    addVehicle,
    getvehicleDetails,
    getDetail,
    updateVehicle,
    deleteVehicle,

    addCompany,
    getCompanyDetails,
    detailCompany,
    updateCompany,
    deleteCompany,
}