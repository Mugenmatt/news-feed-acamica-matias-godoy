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
    color: '#EF476F',
    backgroundColor: '#42a7ff32',
  },
}));

const Categoria = ({match}) => {
  const classes= useStyles()

  const dispatch = useDispatch()

  const searcher = useSelector((state) => state)

  const [loading, setLoading] = useState(false)

  const seccion = match.params.seccion;

  function chosenCategory(){
    switch(seccion) {
        case '1':
            return 'Política'
        case '2':
            return 'Internacionales'
        case '3':
            return 'Tecnología'
        case '4':
            return 'Espectáculos'
        case '5':
            return 'Deportes'
        default:
            return
    }
  }

  useEffect(() => {
    const apiNumber = seccion;
    setTimeout(() => {
      dispatch(actions.fetchNews(apiNumber))
      setLoading(true)
    }, 1000);
  }, [seccion])

  const objNews = searcher.news.map( obj => {
    if(obj.category === chosenCategory(seccion))
      return <Card 
          key={obj.news_id}
          title={obj.title}
          img_url={obj.img_url}
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

export default Categoria