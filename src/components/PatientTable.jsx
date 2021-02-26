import React from 'react';
import { TableContainer } from '@material-ui/core';

import { connect } from 'react-redux';

import PresentPatient from './PresentPatient';
import QuittingPatient from './QuittingPatient';

const PatientTable = ({ display, presentPatient, quittingPatient }) => {
    return (
        <TableContainer style={{ height: '94.05%', overflow: 'scroll' }}>
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
    presentPatient: state.presentPatient,
    quittingPatient: state.quittingPatient,
    display: state.display,
});

export default connect(mapStateToProps)(PatientTable);
