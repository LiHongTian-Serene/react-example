export const BLOG_TYPE = {
    BLOG_MORE: 'BLOT_MORE',
    BLOG_DETAILS: 'BLOG_DETAILS'
}


const HOST = process.env.NODE_ENV === 'production' ? 'https://node-douban-api.herokuapp.com' : 'http://localhost:3000';

export const BLOT_MORE_REQUEST = 'BLOT_MORE_REQUEST'
export const BLOT_MORE_SUCCESS = 'BLOT_MORE_SUCCESS'
export const BLOG_DETAILS_REQUEST = 'BLOG_DETAILS_REQUEST'
export const BLOG_DETAILS_SUCCESS = 'BLOG_DETAILS_SUCCESS'

export const BLOT_MORE = {
    REQUEST: 'BLOT_MORE_REQUEST',
    SUCCESS: 'BLOT_MORE_SUCCESS',
    FAILURE: 'BLOT_MORE_FAILURE'
};

export const BLOG_DETAILS = {
    REQUEST: 'BLOG_DETAILS_REQUEST',
    SUCCESS: 'BLOG_DETAILS_SUCCESS',
    FAILURE: 'BLOG_DETAILS_FAILURE'
}
