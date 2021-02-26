import React from 'react';
import { Paper } from '@material-ui/core';

import PatientTable from './PatientTable';
import Buttons from './Buttons';

const RightSide = () => {
    return (
        <Paper square>
            <div style={{ backgroundColor: '#f5f5f5' }}>
                <Buttons/>
            </div>
            <PatientTable/>
        </Paper>
    );
};



export default RightSide;
