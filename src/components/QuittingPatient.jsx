import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

import { connect } from 'react-redux';
import { getQuittingAdditionalInfo } from '../action/getData';

const QuitingPatient = ({
    quittingPatient,
    getQuittingAdditionalInfo,
    number,
}) => {
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
                    <TableRow
                        onClick={(e) =>
                            getQuittingAdditionalInfo(
                                +e.currentTarget.firstElementChild.firstChild
                                    .nodeValue
                            )
                        }
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
                        <TableCell align='left'>{patient.cause}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

const mapStateToProps = (state) => ({
    number: state.getAdditionalInfoReducer.number,
});

export default connect(mapStateToProps, { getQuittingAdditionalInfo })(
    QuitingPatient
);
