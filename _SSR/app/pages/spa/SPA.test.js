import { mount, shallow, render } from 'enzyme';
import React from 'react';

import spa from './spa';

describe('spa', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<spa debug />);

        expect(component).toMatchSnapshot();
    });
});
