import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../actions/actions'
import {Card} from '../Card/Card';
import {Menu} from '../Menu/Menu'
import {maxNews} from '../../utils/maxNews'

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Internacional = (props) => {

  const classes= useStyles()

  const dispatch = useDispatch()

  // const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  const searcher = useSelector((state) => state)

  const objNews = searcher.news.map( obj => {
    if(obj.category === 'Internacionales') {
      return <Card 
          key={obj.news_id}
          title={obj.title}
          img_url={obj.img_url}
          category={obj.category}
          source_name={obj.source_name}
          url={obj.url}
      />
    } else if(obj.category === null || obj.category !== 'Internacionales') {
      return 
    } else if(!obj.img_url) {
        return <Card 
          key={obj.news_id}
          title={obj.title}
          description={obj.description}
          img_url='https://www.intl-spectrum.com/articles/a1176/ArticleDefault.jpg?x=80x56'
          category={obj.category}
          source_name={obj.source_name}
          url={obj.url}
        />
    }
  })

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.fetchNews())
      setLoading(true)
    }, 1000);
  }, [actions.fetchNews])

      return (
        <div>
          <Menu />
          <div className="newsDiv">
            {
              !loading ? 
              <Backdrop className={classes.backdrop} open>
                <CircularProgress color="inherit" />
              </Backdrop>
              : maxNews(objNews, 10)
          }
              
          </div>
            
        </div>
    )
}

export default Internacional