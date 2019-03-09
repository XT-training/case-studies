import moment from 'moment';
import settingData from './settingsData.json';
import settings from './settingsConstant';

export const getDays = () => {
	return dispatch => {
		const weeks = settingData.numOfDays.map(num => {
			const day = num === 0 ? 'Today': num === 1 ? 'Tomorrow' : moment().add(num, 'days').format('dddd');
			const date = moment().add(num, 'days').format('MM/DD/YYYY');
			return {
				day,
				date,
			};
		});
		dispatch({ type: settings.GET_DAYS, weeks, });
	}
};

export const getTiming = () => {
	return dispatch => {
		dispatch({ type: settings.GET_TIMING, timings: settingData.timings });
	}
};
