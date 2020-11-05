export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";

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

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate()

    return (dispatch) => {
        // console.log(dispatch);
        dispatch(fetchNewsRequest());
        fetch(`https://api.canillitapp.com/latest/${year}-${month}-${day}`)
        .then(res => {
            return res.json();
        })
        .then(res => {
            const news = res.slice(0, 500);
            dispatch(fetchNewsSuccess(news))
        })
    }
}

// const API_SEARCH_URL = '/search/:palabra';

export const fetchWord = (word) => {
    const url = `https://api.canillitapp.com/search/${word}`
    // console.log('Antes del return');
    return (dispatch) => {
        dispatch(fetchNewsRequest());
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(res => {
            // console.log('ESTOY EN LA RESPUESTA');
            const writtenWord = res;
            dispatch(fetchNewsSuccess(writtenWord))
        })
    }

}