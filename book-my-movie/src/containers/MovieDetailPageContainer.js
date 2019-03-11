import { connect } from 'react-redux';
import MovieDetailPage from './../components/pages/MovieDetailPage.jsx';

function mapStateToProps(state) {
	return {
		movie: state.movie,
	};
}

export default connect(
	mapStateToProps,
)(MovieDetailPage);