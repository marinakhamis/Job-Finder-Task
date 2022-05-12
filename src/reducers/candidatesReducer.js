import { FETCH_CANDIDATES } from "../actions/types";

const initialState = {
    // represents Candidates coming from actions
    items: [],
}

export default function candidatesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CANDIDATES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
