import {
	GET_ADDITIONAL_PRESENT,
	GET_ADDITIONAL_QUITTING,
	SET_PRESENT_PATIENT,
	SET_QUITTING_PATIENT,
} from '../action/type';

const initialState = {
	presentPatient: null,
	quittingPatient: null,
	FIO: null,
	age: null,
	diagnosis: null,
};

export default (state = initialState, action) => {
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
		case GET_ADDITIONAL_PRESENT:
			return {
				...state,
				FIO: state.presentPatient.find(
					patient => action.payload === patient.historyNumber
				).firstName,
				age: state.presentPatient.find(
					patient => action.payload === patient.historyNumber
				).birthDate,
				diagnosis: state.presentPatient.find(
					patient => action.payload === patient.historyNumber
				).diagnosis,
			};
		case GET_ADDITIONAL_QUITTING:
			return {
				...state,
				FIO: state.quittingPatient.find(
					patient => action.payload === patient.historyNumber
				).firstName,
				age: state.quittingPatient.find(
					patient => action.payload === patient.historyNumber
				).birthDate,
				diagnosis: state.quittingPatient.find(
					patient => action.payload === patient.historyNumber
				).diagnosis,
			};
		default:
			return state;
	}
};
