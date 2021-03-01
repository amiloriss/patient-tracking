import React from 'react';
import { connect } from 'react-redux';

import { getAge } from '../ageCalculating';

// take info from global state and put in left side of app

const PatientInformation = ({ FIO, age, diagnosis }) => {
    return (
        <div>
            <div style={{ margin: '15px 0 15px 10px' }}>
                <div style={{ display: 'inline-block', width: '65px' }}>
                    ФИО
                </div>
                <div
                    style={{
                        display: 'inline-block',
                        width: '150px',
                        borderBottom: '1px solid #000',
                    }}>
                    {FIO}
                </div>
            </div>
            <div style={{ margin: '15px 0 15px 10px' }}>
                <div style={{ display: 'inline-block', width: '65px' }}>
                    Возраст
                </div>
                <div
                    style={{
                        display: 'inline-block',
                        width: '150px',
                        borderBottom: '1px solid #000',
                    }}>
                        {/* function that translate date into age */}
                    {age && getAge(age)}
                </div>
            </div>
            <div style={{ margin: '15px 0 15px 10px' }}>
                <div style={{ display: 'inline-block', width: '65px' }}>
                    Диагноз
                </div>
                <div
                    style={{
                        display: 'inline-block',
                        width: '150px',
                        borderBottom: '1px solid #000',
                    }}>
                    {diagnosis}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    FIO: state.getAdditionalInfoReducer.FIO,
    age: state.getAdditionalInfoReducer.age,
    diagnosis: state.getAdditionalInfoReducer.diagnosis,
});

export default connect(mapStateToProps)(PatientInformation);
