import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import Split from 'react-split';

import { getData } from '../action/getData';

import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { connect } from 'react-redux';

const AppContainer = ({ presentPatient, quittingPatient, getData }) => {
	useEffect(() => {
		getData();
		//eslint-disable-next-line
	}, []);

	if (presentPatient === null || quittingPatient === null) {
		return <h1>It's not good</h1>;
	} else
		return (
			<Container style={{ height: '700px' }} maxWidth='xl'>
				<Split style={{ height: '100%', display: 'flex' }} sizes={[50, 50]}>
					<LeftSide />
					<RightSide />
				</Split>
			</Container>
		);
};

const mapStateToProps = state => ({
	presentPatient: state.getPatientReducer.presentPatient,
	quittingPatient: state.getPatientReducer.quittingPatient,
});

export default connect(mapStateToProps, { getData })(AppContainer);
