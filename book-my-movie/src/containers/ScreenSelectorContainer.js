import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDays, getTiming } from '../stores/settings/settingsService';
import ScreenSelector from '../components/ScreenSelector/ScreenSelector';
import { getMovieList } from './../stores/movies/movieService'

const mapStateToProps = (state)=> ({
	days: state.settings.days,
	timings: state.settings.timings,
	movies: state.movies,
	theater: state.theater,
});

const mapDispatchToProps = (dispatch) => ({
	getDays: bindActionCreators(getDays, dispatch),
	getTiming: bindActionCreators(getTiming, dispatch),
	getMovieList: bindActionCreators(getMovieList, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenSelector);
