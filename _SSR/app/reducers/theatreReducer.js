import * as types from '../types';

export default function theaters(state, action) {
    switch (action.type) {
        case types.THEATER: {
            return Object.assign([], state, action.data);
        }
        default: {
            return state || [];
        }
    }
}
