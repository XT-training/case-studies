import { mount, shallow, render } from 'enzyme';
import React from 'react';

import SPA from './SPA';

describe('SPA', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<SPA debug />);

        expect(component).toMatchSnapshot();
    });
});
