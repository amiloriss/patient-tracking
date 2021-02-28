import axios from 'axios';

import {
	GET_PRESENT_PATIENT,
	GET_QUITING_PATIENT,
	GET_ADDITIONAL_PRESENT,
	GET_ADDITIONAL_QUITTING,
	SET_PRESENT_PATIENT,
	SET_QUITTING_PATIENT,
} from './type';

export const getData = () => async dispatch => {
	await axios
		.all([
			axios.get(
				'https://patient-test-app.s3.eu-north-1.amazonaws.com/json-files/presentList.json'
			),
			axios.get(
				'https://patient-test-app.s3.eu-north-1.amazonaws.com/json-files/quittingList.json'
			),
		])
		.then(
			axios.spread((...responses) => {
				dispatch({ type: SET_PRESENT_PATIENT, payload: responses[0].data });
				dispatch({ type: SET_QUITTING_PATIENT, payload: responses[1].data });
			})
		);
};

export const getPresentPatient = () => ({
	type: GET_PRESENT_PATIENT,
});

export const getQuittingPatient = () => ({
	type: GET_QUITING_PATIENT,
});

export const getPresentAdditionalInfo = patientNumber => ({
	type: GET_ADDITIONAL_PRESENT,
	payload: patientNumber,
});

export const getQuittingAdditionalInfo = patientNumber => ({
	type: GET_ADDITIONAL_QUITTING,
	payload: patientNumber,
});
