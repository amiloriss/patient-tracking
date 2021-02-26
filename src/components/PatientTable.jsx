import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';

import { connect } from 'react-redux';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const PatientTable = ({presentPatient, quitingPatient}) => {
    return (
        <TableContainer style={{height: '94.05%',overflow: 'scroll'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>№ ИБ</TableCell>
                        <TableCell align='center'>ФИО</TableCell>
                        <TableCell align='center'>Палата</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {presentPatient.map((patient) => (
                        <TableRow key={patient.historyNumber}>
                            <TableCell component='th' scope='row'>
                                {patient.historyNumber}
                            </TableCell>
                            <TableCell align='center'>{patient.firstName}</TableCell>
                            <TableCell align='center'>{patient.bedNumber}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const mapStateToProps = (state) => ({
    presentPatient: state.presentPatient,
    quitingPatient: state.quitingPatient,
});

export default connect(mapStateToProps,)(PatientTable);
