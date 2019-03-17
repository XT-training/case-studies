import { mount, shallow, render } from 'enzyme';
import React from 'react';

import Screening from './Screening';

describe('Screening', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Screening debug />);

        expect(component).toMatchSnapshot();
    });
});
