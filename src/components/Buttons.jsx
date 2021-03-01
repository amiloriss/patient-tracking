import React from 'react';
import { connect } from 'react-redux';

import { getPresentPatient, getQuittingPatient } from '../action/getData';

// buttons to toggle between two patient category

const Buttons = ({
    display,
    getPresentPatient,
    getQuittingPatient,
    amountPresentPatient,
    amountQuittingPatient,
}) => {
    return (
        <>
            <button
                onClick={() => getPresentPatient()}
                style={btnStyle}
                className={(
                    display === 'present' && 'btn-selected'
                ).toString()}>
                присутствуют ({amountPresentPatient})
            </button>
            <button
                onClick={() => getQuittingPatient()}
                style={btnStyle}
                className={(
                    display === 'quitting' && 'btn-selected'
                ).toString()}>
                выбывшие ({amountQuittingPatient})
            </button>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        display: state.getPatientReducer.display,
        amountPresentPatient: state.getPatientReducer.presentPatient.length,
        amountQuittingPatient: state.getPatientReducer.quittingPatient.length,
    };
};

const btnStyle = {
    border: 'none',
    fontSize: '16px',
    fontWeight: '100',
    textTransform: 'uppercase',
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: 'initial',
};

export default connect(mapStateToProps, {
    getPresentPatient,
    getQuittingPatient,
})(Buttons);
