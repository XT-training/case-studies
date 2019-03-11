import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTheatersList } from './../stores/movies/movieService.js';
import { SetTheater } from './../stores/movies/moviesAction';
import TheaterPage from './../components/pages/TheaterPage.jsx';

function mapStateToProps(state) {
	const { theaters, theater } = state;
	return {
		theaters,
		theater,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getTheaters: bindActionCreators(getTheatersList, dispatch),
		setTheater: bindActionCreators(SetTheater, dispatch),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TheaterPage);