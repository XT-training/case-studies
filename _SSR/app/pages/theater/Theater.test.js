import { mount, shallow, render } from 'enzyme';
import React from 'react';

import Theater from './Theater';

describe('Theater', () => {
    it('Theater › should render correctly in "debug" mode', () => {
        const component = shallow(<Theater debug />);

        expect(component).toMatchSnapshot();
    });
});
