import React from 'react';
import {connect} from 'react-redux'

import {getPresentPatient, getQuitingPatient} from '../action/getData'

const Buttons = ({display, getPresentPatient, getQuitingPatient}) => {
    return (
        <>
            <button
                onClick={() => getPresentPatient()}
                style={btnStyle}
                className={display === 'present' && 'btn-selected'}>
                присутствуют
            </button>
            <button
                onClick={() => getQuitingPatient()}
                style={btnStyle}
                className={display === 'quitting' && 'btn-selected'}>
                выбывшие
            </button>
        </>
    );
};

const mapStateToProps = (state)=>{
    console.log(state);
    return {

        display: state.display
    }
}

const btnStyle = {
    border: 'none',
    fontSize: '16px',
    fontWeight: '100',
    textTransform: 'uppercase',
    padding: '0 5px',
    cursor: 'pointer',
    padding: '10px',
    backgroundColor: 'initial',
};

export default connect(mapStateToProps, {getPresentPatient, getQuitingPatient}) (Buttons);
