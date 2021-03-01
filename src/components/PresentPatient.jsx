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

// list of present patient category

const PresentPatient = ({
    presentPatient,
    getPresentAdditionalInfo,
    number,
}) => {
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
                        style={{
                            cursor: 'pointer',
                            backgroundColor:
                                number === patient.historyNumber && '#f5f5f5',
                            borderLeft:
                                number === patient.historyNumber &&
                                '7px solid #32a1e9',
                        }}
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

const mapStateToProps = (state) => ({
    number: state.getAdditionalInfoReducer.number,
});

export default connect(mapStateToProps, { getPresentAdditionalInfo })(
    PresentPatient
);
