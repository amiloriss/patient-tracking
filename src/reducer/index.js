import presentPatient from '../data/presentList.json';
import quitingPatient from '../data/quittingList.json';

import { GET_PRESENT_PATIENT, GET_QUITING_PATIENT } from '../action/type';

const initialState = {
    presentPatient,
    quitingPatient,
};

export default (state = initialState, action) => {
    switch (action) {
        case GET_PRESENT_PATIENT:
            return presentPatient;
        case GET_QUITING_PATIENT:
            return quitingPatient;
    }
    return state;
};
