import fetch from 'isomorphic-fetch';
import * as API from '../constants/API';
import { createAction } from 'redux-actions';
import { BLOG_DETAILS } from "../constants/API";

const fetchSuccess = createAction(BLOG_DETAILS.SUCCESS);

export function fetchDate(type=API.BLOG_TYPE.BLOG_DETAILS){
    return (dispatch) => {
        fetch(`${API.BLOG_DETAILS}/${ty0pe}`).then(response => {
            {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response
            }
        }).then(response => response.json())
        .then(items => {
            dispatch(fetchSuccess(items.subjects))
        })
        .catch()
    }

}