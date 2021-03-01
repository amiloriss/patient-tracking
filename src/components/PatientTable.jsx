import React from 'react';
import { TableContainer } from '@material-ui/core';

import { connect } from 'react-redux';

import PresentPatient from './PresentPatient';
import QuittingPatient from './QuittingPatient';

const PatientTable = ({ display, presentPatient, quittingPatient }) => {
    return (
        <TableContainer style={{ height: '92.5%', overflowY: 'scroll' }}>
            {display === 'present' && (
                <PresentPatient presentPatient={presentPatient} />
            )}
            {display === 'quitting' && (
                <QuittingPatient quittingPatient={quittingPatient} />
            )}
        </TableContainer>
    );
};

const mapStateToProps = (state) => ({
    presentPatient: state.getPatientReducer.presentPatient,
    quittingPatient: state.getPatientReducer.quittingPatient,
    display: state.getPatientReducer.display,
});

export default connect(mapStateToProps)(PatientTable);
