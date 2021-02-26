import React, { useState } from 'react';
import { Paper } from '@material-ui/core';

import PatientTable from './PatientTable'

const RightSide = () => {
    const [display, setDisplay] = useState('present');
    return (
        <Paper square>
            <div style={{ backgroundColor: '#f5f5f5' }}>
                <button
                    onClick={() => setDisplay('present')}
                    style={btnStyle}
                    className={display === 'present' && 'btn-selected'}>
                    присутствуют
                </button>
                <button
                    onClick={() => setDisplay('quiting')}
                    style={btnStyle}
                    className={display === 'quiting' && 'btn-selected'}>
                    выбывшие
                </button>
            </div>
            <PatientTable/>
        </Paper>
    );
};

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

export default RightSide;
