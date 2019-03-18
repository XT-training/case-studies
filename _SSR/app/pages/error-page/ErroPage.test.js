import { mount, shallow, render } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import ErrorPage from './ErrorPage';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});
describe('ErrorPage', () => {
    it('should render correctly in', () => {
        const component = shallow(<Provider store={store}>
            <ErrorPage />
        </Provider>);

        expect(component).toMatchSnapshot();
    });
});
