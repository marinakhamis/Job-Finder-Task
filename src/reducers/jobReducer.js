import { FETCH_JOBS } from "../actions/types";

const initialState = {
    // represents jobs coming from actions
    items: [],
    item: {}
}

export default function jobReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
