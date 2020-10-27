import axios from 'axios';

const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";

export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export const fetchNews = () => {

        return (dispatch) => {

        }
}