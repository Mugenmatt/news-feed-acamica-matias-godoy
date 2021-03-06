import React, {useState, useEffect} from 'react';
import {Card} from '../../Card/Card';
import {Menu} from '../../Menu/Menu'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../actions/actions'
import './Home.css'

import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#1a38bd',
    backgroundColor: '#42a7ff32',
  },
}));

const Home = (props) => {
  const classes= useStyles()

  const dispatch = useDispatch()
  
  const searcher = useSelector((state) => state)

  const [loading, setLoading] = useState(false)

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
              : 
              searcher.news.map( obj => {
                return obj.img_url ? 
                  <Card 
                      key={obj.news_id}
                      title={obj.title}
                      img_url={obj.img_url}
                      category={obj.category}
                      source_name={obj.source_name}
                      url={obj.url}
                  />
                  : <Card 
                      key={obj.news_id}
                      title={obj.title}
                      description={obj.description}
                      img_url='https://www.intl-spectrum.com/articles/a1176/ArticleDefault.jpg?x=80x56'
                      category={obj.category}
                      source_name={obj.source_name}
                      url={obj.url}
                    />
              }).slice(0, 10)
          }
              
          </div>
            
        </div>
    )
}

export default Home;