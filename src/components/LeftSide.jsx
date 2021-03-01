import React from 'react';
import { Paper } from '@material-ui/core';

import PatientInformation from './PatientInformation';

const LeftSide = () => {
    return (
        <Paper square>
            <div
                style={{
                    backgroundColor: '#32a1e9',
                    color: '#fff',
                    fontWeight: '100',
                    padding: '11px 10px',
                }}>
                Информация о пациенте{' '}
            </div>
            <PatientInformation />
        </Paper>
    );
};

export default LeftSide;
