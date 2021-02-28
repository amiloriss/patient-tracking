import { combineReducers } from 'redux';
import getPatientReducer from './getPatientReducer';
import getAdditionalInfoReducer from './getAdditionalInfoReducer';

export default combineReducers({
	getPatientReducer,
	getAdditionalInfoReducer,
});
