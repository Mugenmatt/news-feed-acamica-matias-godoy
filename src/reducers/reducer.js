import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS } from '../actions/actions'

const initialState = {
    news: [],
    loading: true
}

const reducerNews = (state = initialState, action) => {

    switch(action.type) {
        case FETCH_NEWS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_NEWS_SUCCESS:

            return {
                ...state,
                loading: false,
                news: action.payload,
            }

        default:
            return state
    }

}

export default reducerNews;

