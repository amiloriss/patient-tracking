import {
	GET_PRESENT_PATIENT,
	GET_QUITING_PATIENT,
	GET_ADDITIONAL_PRESENT,
	GET_ADDITIONAL_QUITTING,
} from './type';

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
