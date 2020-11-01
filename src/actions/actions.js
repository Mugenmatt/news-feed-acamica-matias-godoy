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