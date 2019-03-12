import * as types from '../types';

export default function theatres(state, action) {
    switch (action.type) {
        case types.HOME_PAGE: {
            return Object.assign({}, state, action.data);
        }
        default: {
            return state || {};
        }
    }
}
