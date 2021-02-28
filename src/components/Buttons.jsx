import React from 'react';
import { connect } from 'react-redux';

import { getPresentPatient, getQuittingPatient } from '../action/getData';

const Buttons = ({ display, getPresentPatient, getQuittingPatient }) => {
	return (
		<>
			<button
				onClick={() => getPresentPatient()}
				style={btnStyle}
				className={display === 'present' && 'btn-selected'}
			>
				присутствуют
			</button>
			<button
				onClick={() => getQuittingPatient()}
				style={btnStyle}
				className={display === 'quitting' && 'btn-selected'}
			>
				выбывшие
			</button>
		</>
	);
};

const mapStateToProps = state => {
	return {
		display: state.display,
	};
};

const btnStyle = {
	border: 'none',
	fontSize: '16px',
	fontWeight: '100',
	textTransform: 'uppercase',
	cursor: 'pointer',
	padding: '10px',
	backgroundColor: 'initial',
};

export default connect(mapStateToProps, {
	getPresentPatient,
	getQuittingPatient,
})(Buttons);
