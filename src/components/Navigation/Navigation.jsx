import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import {Politica, Internacional, Deportes, Tecnologia, Diseno, Espectaculos} from './components/Pages';
import {Politica} from '../Pages/Politica'
import {Internacional} from '../Pages/Internacional'
import {Deportes} from '../Pages/Deportes'
import {Tecnologia} from '../Pages/Tecnologia'
import {Diseno} from '../Pages/Diseno'
import {Espectaculos} from '../Pages/Espectaculos'
import Home from '../Home/Home'

export const Navigation = () => {
    return(
  
      <nav className="options">
          
        <BrowserRouter>
  
          <div>
  
            <Switch>
            
              <Route className="option" exact path='/' component={Home} />
              {/* <Route className="option" path={'/:categoria'} component={() => {if() {}}} /> */}
  
              {/* <Route path="/search" render={} /> */}
  
              <Route path='/news/category/:seccion' component={Politica} />
  
              <Route path='/news/category/internacional' component={Internacional} />
  
              <Route path='/news/category/tecnologia' component={Tecnologia} />
  
              <Route path='/news/category/espectaculos' component={Espectaculos} />
  
              <Route path='/news/category/deportes' component={Deportes} />
  
              <Route path='/news/category/diseno' component={Diseno} />
  
            </Switch>  
  
          </div>
  
        </BrowserRouter>
  
      </nav>
    )
  }