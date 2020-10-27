import { fetchNewsRequest, fetchNewsSuccess } from '../actions/actions'

const initialState = {
    news: []
}

const reducerNews = (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_NEWS_REQUEST':
            return {};

        case 'FETCH_NEWS_SUCCESS':
            return {};

        default:
            return state
    }

}

export default reducerNews;

