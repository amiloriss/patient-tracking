import {
    GET_PRESENT_PATIENT,
    GET_QUITING_PATIENT,
    SET_PRESENT_PATIENT,
    SET_QUITTING_PATIENT,
} from '../action/type';

const initialState = {
    presentPatient: null,
    quittingPatient: null,
    display: 'present',
};

// reducer to work with patient in a left side to get category and list of those

const getPatientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRESENT_PATIENT:
            return {
                ...state,
                presentPatient: action.payload,
            };
        case SET_QUITTING_PATIENT:
            return {
                ...state,
                quittingPatient: action.payload,
            };
        case GET_PRESENT_PATIENT:
            return {
                ...state,
                presentPatient: state.presentPatient,
                display: 'present',
            };
        case GET_QUITING_PATIENT:
            return {
                ...state,
                quittingPatient: state.quittingPatient,
                display: 'quitting',
            };
        default:
            return state;
    }
};

export default getPatientReducer;
