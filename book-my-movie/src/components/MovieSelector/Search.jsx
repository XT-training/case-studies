import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
import { Icon } from 'react-icons-kit'
import {search} from 'react-icons-kit/fa/search'
import './Search.scss';

const rootClass = 'search';

class Search extends Component {
	render() {
		const { intl } = this.props;
		const placeholder = intl.formatMessage({id: 'search.placeholder'})
		return (
			<form className={rootClass}>
				<div className={`${rootClass}__icon`}>
					<Icon icon={search} />
				</div>
				<input type="text" className={`${rootClass}__search-field`} placeholder={placeholder} />
			</form>
		);
	}
}

Search.propTypes = {
	intl: intlShape.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func,
};

export default injectIntl(Search);