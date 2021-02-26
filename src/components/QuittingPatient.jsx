import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

const QuitingPatient = ({ quittingPatient }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>№ ИБ</TableCell>
                    <TableCell align='left'>ФИО</TableCell>
                    <TableCell align='left'>Причина выбития</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {quittingPatient.map((patient) => (
                    <TableRow key={patient.historyNumber}>
                        <TableCell component='th' scope='row'>
                            {patient.historyNumber}
                        </TableCell>
                        <TableCell align='left'>{patient.firstName}</TableCell>
                        <TableCell align='left'>{patient.cause}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default QuitingPatient;
