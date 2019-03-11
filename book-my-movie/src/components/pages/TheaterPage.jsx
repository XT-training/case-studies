import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './TheaterPage.scss';

const rootClass = 'theater-page';

const Theater = ({ theater, onSelectTheater }) => {
	const { theatreName, theatreAddress } = theater;

	return (
		<div className="theater" onClick={e => onSelectTheater(theater)}>
			<div className="theater__name">
				{theatreName}
			</div>
			<div className="theater__address">
				{theatreAddress}
			</div>
		</div>
	);
};

Theater.propTypes = {
	theater: PropTypes.object,
	onSelectTheater: PropTypes.func,
}

class TheaterPage extends PureComponent {
	static propTypes = {
		getTheaters: PropTypes.func,
		theaters: PropTypes.array,
	}

	componentDidMount() {
		const { getTheaters } = this.props;
		getTheaters();
	}

	renderTheraterList() {
		const { theaters, setTheater } = this.props;
		const theaterList = theaters.map(theater => 
			<Theater
				theater={theater}
				key={theater._id}
				onSelectTheater={setTheater}
			/>
		);

		return (
			<div className={`${rootClass}__list`}>
				{theaterList}
			</div>
		);
	}

	render() {
		const { theater } = this.props;
		if(theater._id){
			return <Redirect to="/movie-screening" />
		}
		return (
			<div className={rootClass}>
				<h1 className={`${rootClass}__title`}>
					<FormattedMessage id="title" />
				</h1>
				<div className={`${rootClass}__choose-text`}>
					<FormattedMessage id="theater.chooseTheater" />
				</div>
				{this.renderTheraterList()}
			</div>
		);
	}
};

export default TheaterPage;