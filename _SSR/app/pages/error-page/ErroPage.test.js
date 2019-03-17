import { mount, shallow, render } from 'enzyme';
import React from 'react';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
    it('ErrorPage › should render correctly in "debug" mode', () => {
        const component = shallow(<ErrorPage debug />);

        expect(component).toMatchSnapshot();
    });
});
