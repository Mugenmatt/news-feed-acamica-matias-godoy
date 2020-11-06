import React from 'react'
import Categoria from '../Pages/Categoria'
import Home from '../Pages/Home/Home'
import WordSearch from '../Pages/WordSearch'
import {Route, Switch} from 'react-router-dom';

export const Navigation = () => {

    return(
  
      <nav className="options">
          
  
          <div>
  
            <Switch>
            
              <Route exact path='/' component={Home} />
  
              <Route path="/search/:word" component={WordSearch} />

              <Route path='/news/category/:seccion' component={Categoria} />

            </Switch>  
  
          </div>
  

  
      </nav>
    )
  }