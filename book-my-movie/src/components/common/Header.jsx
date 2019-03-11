import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Icon } from 'react-icons-kit'
import {calendar, film} from 'react-icons-kit/fa'
import './Header.scss';

// Header Tab component

const Header = () => {
	return (
			<header className="header">
				<NavLink exact to="/movie-screening" className="header-movie">
					<Icon icon={film} />
					<span className="title">
						<FormattedMessage id="header.tab.title" />
					</span>
				</NavLink>
				<NavLink to="/movie-screening/screen-time" className="header-timing">
					<Icon icon={calendar} />
					<span className="title">
						<FormattedMessage id="header.tab.screeTimes" />
					</span>
				</NavLink>
			</header>
	);
};

export default Header;