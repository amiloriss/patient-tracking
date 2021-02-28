import presentPatient from '../data/presentList.json';
import quittingPatient from '../data/quittingList.json';

import { GET_PRESENT_PATIENT, GET_QUITING_PATIENT } from '../action/type';

const initialState = {
	presentPatient,
	quittingPatient,
	display: 'present',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PRESENT_PATIENT:
			return { presentPatient, display: 'present' };
		case GET_QUITING_PATIENT:
			return { quittingPatient, display: 'quitting' };
		default:
			return state;
	}
};
