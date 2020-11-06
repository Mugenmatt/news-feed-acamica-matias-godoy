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

export const fetchNews = (apiNumber) => {

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate()

    const url = apiNumber === undefined
    ? `https://api.canillitapp.com/latest/${year}-${month}-${day}`
    : `https://api.canillitapp.com/news/category/${apiNumber}`;

    console.log(url);

    return (dispatch) => {
        dispatch(fetchNewsRequest());
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(res => {
            const news = res.slice(0, 200);
            console.log(news);
            dispatch(fetchNewsSuccess(news))
        })
    }
}

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