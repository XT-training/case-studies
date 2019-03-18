import { mount, shallow, render } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Theater from './Theater';

configure({ adapter: new Adapter() });

describe('Theater', () => {
    it('Theater should render correctly', () => {
        const theater = {
            theatreName: 'phoneix',
            theatreAddress: 'abc',
            _id: 10
        };

        const component = shallow(<Theater theater={theater} />);

        expect(component).toMatchSnapshot();
    });
});
