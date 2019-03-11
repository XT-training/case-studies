import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import ScreeningList from './ScreeningList.jsx';

import './ScreenSelector.scss';

const rootClass = 'screen-selector';

/**
 * SLOT SELECTOR COMPONENT
 * @param {*} param0 
 */
const SlotSelector = ({ timings, handleSlotSelect }) => {
	const slotElem = timings.map((slot, index) => {
		return (
			<div key={index} className="day">
				<div className="day-tile" onClick={e => handleSlotSelect(slot)}>
					{slot}
				</div>
			</div>
		)
	});

	return (
		<div className={`${rootClass}__section__list`}>
			{slotElem}
		</div>
	)
};

SlotSelector.propTypes = {
	timings: PropTypes.array.isRequired,
	handleSlotSelect: PropTypes.func.isRequired,
}


/**
 * Day Selector Component
 * @param {Day Select} param0 
 */

const DaySelector = ({ days, handleDaySelect }) => {
	const daysElem = days.map((elem, index) => {
		return (
			<div key={index} className="day">
				<div className="day-tile" onClick={e => handleDaySelect(elem)}>
					{elem.day}
				</div>
			</div>
		)
	});

	return (
		<div className={`${rootClass}__section__list`}>
			{daysElem}
		</div>
	);
}

DaySelector.propTypes = {
	days: PropTypes.array.isRequired,
	handleDaySelect: PropTypes.func,
};

/**
 * SCREEN SELECTOR COMPONENT
 */
class ScreenSelector extends PureComponent {
	static propTypes = {
		days: PropTypes.array.isRequired,
		timings: PropTypes.array.isRequired,
	}

	static initialState = {
		selectedDay: null,
		selectedSlot: null,
	}
	constructor() {
		super();
		this.state = ScreenSelector.initialState;
		this.handleDaySelect = this.handleDaySelect.bind(this);
		this.handleSlotSelect = this.handleSlotSelect.bind(this);
		this.removeSelectedDate = this.removeSelectedDate.bind(this);
		this.removeSelectedSlot = this.removeSelectedSlot.bind(this);
	}

	componentDidMount() {
		const { getDays, getMovieList } = this.props;
		getMovieList();// Get Movies by Date
		getDays();
	}

	// handle day selection
	handleDaySelect(selectedDay) {
		const { getTiming, getMovieList } = this.props;
		this.setState({
			selectedDay,
		});
		getMovieList({ searchdate :selectedDay.date });// Get Movies by Date
		getTiming(); // Get Time slots
	}

	// handle slot selection
	handleSlotSelect(selectedSlot) {
		this.setState({
			selectedSlot,
		});
	}

	// handle remove date
	removeSelectedDate() {
		this.setState({
			selectedDay: null,
		});
	}

	// handle remove slot
	removeSelectedSlot() {
		this.setState({
			selectedSlot: null,
		});
	}

	renderSelectedDay() {
		const { selectedDay } = this.state;
		if(!selectedDay){
			return null;
		}
		return (
			<div className={`bg-info ${rootClass}__selected-day`}>
				{selectedDay.day}
				<button
					type="button"
					className="close"
					aria-label="Close"
					onClick={this.removeSelectedDate}>
						<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);
	}

	renderSelectedSlot() {
		const { selectedSlot } = this.state;

		return (
			<div className={`bg-info ${rootClass}__selected-day`}>
				{selectedSlot}
				<button
					type="button"
					className="close"
					aria-label="Close"
					onClick={this.removeSelectedSlot}>
						<span aria-hidden="true">&times;</span>
				</button>
			</div>
		);
	}

	render() {
		const { selectedDay, selectedSlot } =this.state;
		const { timings, days, movies, theater } = this.props;

		if(!theater._id){
			return <Redirect to="/" />;
		}

		return (
			<div className={rootClass}>
				{this.renderSelectedDay()}
				{selectedSlot && this.renderSelectedSlot()}
				<div className={`${rootClass}__section`}>
					{(selectedDay)
						? !selectedSlot && <SlotSelector timings={timings} handleSlotSelect={this.handleSlotSelect} />
						: <DaySelector days={days} handleDaySelect={this.handleDaySelect}/>
					}
				</div>
				<div className={`${rootClass}__result`}>
					<ScreeningList movies={movies} />
				</div>
			</div>
			
		);
	}
}

export default ScreenSelector;
