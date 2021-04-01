const { COMPANY_ENTRY_REQUEST, COMPANY_ENTRY_SUCCESS, COMPANY_ENTRY_FAIL, COMPANY_DETAIL_REQUEST, COMPANY_DETAIL_SUCCESS, COMPANY_DETAIL_FAIL, COMPANY_DELETE_FAIL, COMPANY_DELETE_SUCCESS, COMPANY_DELETE_REQUEST, COMPANY_DELETE_RESET, COMPANY_REQUEST, COMPANY_SUCCESS, COMPANY_FAIL, COMPANY_UPDATE_REQUEST, COMPANY_UPDATE_SUCCESS, COMPANY_UPDATE_FAIL, COMPANY_UPDATE_RESET } = require("../constants/adminConstants")

function companyEntryReducer(state = {}, { type, payload }) {
    switch (type) {
        case COMPANY_ENTRY_REQUEST:
            return {
                loading: true,
                success: false
            }
        case COMPANY_ENTRY_SUCCESS:
            return {
                loading: false,
                success: true,
                companyInfo: payload
            }
        case COMPANY_ENTRY_FAIL:
            return {
                loading: false,
                success: false,
                error: payload
            }
        default:
            return state
    }
}

function companyDetailReducer(state = { companies: [] }, { type, payload }) {
    switch (type) {
        case COMPANY_DETAIL_REQUEST:
            return {
                loading: true,
                companies: []
            }
        case COMPANY_DETAIL_SUCCESS:
            return {
                loading: false,
                companies: payload
            }
        case COMPANY_DETAIL_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
function companyReducer(state = { loading: true}, { type, payload }) {
    switch (type) {
        case COMPANY_REQUEST:
            return {
                loading: true
            }
        case COMPANY_SUCCESS:
            return {
                loading: false,
                company: payload
            }
        case COMPANY_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
const companyUpdateReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case COMPANY_UPDATE_REQUEST:
            return { loading: true };
        case COMPANY_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case COMPANY_UPDATE_FAIL:
            return { loading: false, error: payload };
        case COMPANY_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};
const companyDeleteReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case COMPANY_DELETE_REQUEST:
            return { loading: true };
        case COMPANY_DELETE_SUCCESS:
            return { loading: false, success: true };
        case COMPANY_DELETE_FAIL:
            return { loading: false, error: payload };
        case COMPANY_DELETE_RESET:
            return {};
        default:
            return state;
    }
};
export {
    companyEntryReducer,
    companyDetailReducer,
    companyReducer,
    companyUpdateReducer,
    companyDeleteReducer,
}