export const maxNews = (array, newsQuantity) => {

    const news = array.filter( newsObj => {
        return newsObj !== undefined
    })

    return news.slice(0, newsQuantity)

}