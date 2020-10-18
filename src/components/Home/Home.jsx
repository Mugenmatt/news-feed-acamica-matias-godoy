import React from 'react';
import {News} from '../Card/Card';
import {Menu} from '../Menu/Menu'

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate()

class Home extends React.Component {
  
    state = {
      news : [],
      loading : false,
    }
  
    componentDidMount() {
      fetch(`https://api.canillitapp.com/latest/${year}-${month}-${day}`)
      .then(res => {
        return res.json();
      })
      .then(res => {
          return this.setState({
            news : res,
            loading: true
          })
      })
    }
    
    render() {
  
      const {news, loading} = this.state;
      const newsObj = news.map((obj) => {
        return obj.img_url 
        ? <News 
            key={obj.news_id}
            title={obj.title}
            img_url={obj.img_url}
            category={obj.category}
            source_name={obj.source_name}
            url={obj.url}
        />
        : <News 
            key={obj.news_id}
            title={obj.title}
            description={obj.description}
            img_url='https://www.intl-spectrum.com/articles/a1176/ArticleDefault.jpg?x=80x56'
            category={obj.category}
            source_name={obj.source_name}
            url={obj.url}
          />
      })
    
      return (
        <div>
          <Menu />
          <div className="newsDiv">
              {
                !loading 
                ? <div className="loadingDiv">
                    <img 
                      style={{'height':'60vh', 'margin-left':'40%'}} 
                      className="loadingImg" 
                      src="https://ak.picdn.net/shutterstock/videos/23800711/thumb/1.jpg" 
                      alt="Loading news!"/>
                  </div> 
                : newsObj.slice(0, 10)
              }
            </div>
        </div>
      )
    }
    }

export default Home;