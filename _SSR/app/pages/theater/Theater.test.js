import { mount, shallow, render } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import Theater from './Theater';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});
describe('Theater', () => {
    it('Theater should render correctly', () => {
        const component = shallow(<Provider store={store}>
            <Theater />
        </Provider>);

        expect(component).toMatchSnapshot();
    });
});
