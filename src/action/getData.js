import { GET_PRESENT_PATIENT, GET_QUITING_PATIENT } from './type';

export const getPresentPatient = () => ({
    type: GET_PRESENT_PATIENT,
});

export const getQuitingPatient = () => ({
    type: GET_QUITING_PATIENT,
});
