import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { getPresentAdditionalInfo } from '../action/getData';

const PresentPatient = ({ presentPatient, getPresentAdditionalInfo }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>№ ИБ</TableCell>
                    <TableCell align='left'>ФИО</TableCell>
                    <TableCell align='left'>Палата</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {presentPatient.map((patient) => (
                    <TableRow
                        onClick={(e) => {
                            getPresentAdditionalInfo(
                                +e.currentTarget.firstElementChild.firstChild
                                    .nodeValue
                            );
                        }}
                        style={{ cursor: 'pointer' }}
                        key={patient.historyNumber}>
                        <TableCell component='th' scope='row'>
                            {patient.historyNumber}
                        </TableCell>
                        <TableCell align='left'>{patient.firstName}</TableCell>
                        <TableCell align='left'>{patient.bedNumber}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default connect(null, { getPresentAdditionalInfo })(PresentPatient);
