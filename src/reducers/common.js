import { combineReducers } from "redux";
import { BLOG_DETAILS } from "../constants/API";

export function fetchData(state = [], action) {
    switch (action.type) {
        case BLOG_DETAILS.SUCCESS: {
            return [...action.payload]
        }
        default: {
            return state;
        }
    }
}

export default combineReducers({
    items: fetchData,
});

export const getState = (state) => {
    return state.commonReducer
}