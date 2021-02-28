import presentPatient from '../data/presentList.json';
import quittingPatient from '../data/quittingList.json';

import {
	GET_ADDITIONAL_PRESENT,
	GET_ADDITIONAL_QUITTING,
} from '../action/type';

const initialState = {
	presentPatient,
	quittingPatient,
	FIO: null,
	age: null,
	diagnosis: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
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
