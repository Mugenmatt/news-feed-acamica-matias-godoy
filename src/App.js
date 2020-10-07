import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import './index';
import letterQuantity from './utils/letterQuantity'

const API_CATEGORY_URL = '/news/category/:category';

const API_LATEST_URL = 'https://api.canillitapp.com/latest/:yyyy-mm-dd'

const API_SEARCH_URL = '/search/:palabra';

// ------------------------------------------FECHA HOY---------------------------------------------------
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate()

// ------------------------------------------APP---------------------------------------------------
class App extends React.Component {

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
      return obj.img_url ? <News 
      key={obj.news_id}
      title={obj.title}
      img_url={obj.img_url}
      category={obj.category}
      source_name={obj.source_name}
      url={obj.url}
      />
      :
       <News 
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

      <div className="App">
  
        <header>
          <HeaderUp />
          <Navigation />
          <div className="newsDiv">
            {
              !loading ? <div className="loadingDiv"><img className="loadingImg" src="" alt="Loading news!"/></div> : newsObj.slice(0, 20)
            }
          </div>
        </header>
  
      <main>
  
      </main>
  
      </div>
    );
  }
  }
  

export default App;


// ------------------------------------------HEADER?---------------------------------------------------

const HeaderUp = () => {
  return(
    <div className="containerHeaderUp">
      <h1 className="mainTitle">News Feeds</h1>
      <div className="searcher">
      <input className="inputSearch" type="text" placeholder="Buscar" />
      <i className="fas fa-search"></i>
      </div>

    </div>
  )
}

const Navigation = () => {
  return(

    <nav className="options">
        
      <BrowserRouter>

        <div>

          <Switch>
          
            {/* <Route className="option" exact path='/' component={Home} />
            <Route className="option" path={'/:categoria'} component={() => {if() {}}} /> */}

            <Route exact path='/' render={Home} />

            <Route path='/politica' render={Politica} />

            <Route path='/internacional' render={Internacional} />

            <Route path='/tecnologia' render={Tecnologia} />

            <Route path='/espectaculos' render={Espectaculos} />

            <Route path='/deportes' render={Deportes} />

            <Route path='/diseno' render={Diseno} />

          </Switch>  

        </div>

      </BrowserRouter>

    </nav>
  )
}

// ------------------------------------------PAGINACIONES----------------------------------------------------

const Home = () => {
  return (
    <div>
      <div className="paginationDiv">
        <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/politica">Política</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/internacional">Internacional</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/tecnologia">Tecnología</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/espectaculos">Espectáculos</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/deportes">Deportes</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/diseno">Diseño</NavLink>
      </div>
    </div>
  )
}

const Politica = () => {
  return (
    <div>
      <div className="paginationDiv">
        <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/politica">Política</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/internacional">Internacional</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/tecnologia">Tecnología</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/espectaculos">Espectáculos</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/deportes">Deportes</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/diseno">Diseño</NavLink>
      </div>
    </div>
  )
}

const Internacional = () => {
  return (
    <div>
      <div className="paginationDiv">
        <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/politica">Política</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/internacional">Internacional</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/tecnologia">Tecnología</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/espectaculos">Espectáculos</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/deportes">Deportes</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/diseno">Diseño</NavLink>
      </div>
    </div>
  )
}

const Tecnologia = () => {
  return (
    <div>
      <div className="paginationDiv">
        <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/politica">Política</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/internacional">Internacional</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/tecnologia">Tecnología</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/espectaculos">Espectáculos</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/deportes">Deportes</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/diseno">Diseño</NavLink>
      </div>
    </div>
  )
}

const Espectaculos = () => {
  return (
    <div>
      <div className="paginationDiv">
        <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/politica">Política</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/internacional">Internacional</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/tecnologia">Tecnología</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/espectaculos">Espectáculos</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/deportes">Deportes</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/diseno">Diseño</NavLink>
      </div>
    </div>
  )
}

const Deportes = () => {
  return (
    <div>
      <div className="paginationDiv">
        <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/politica">Política</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/internacional">Internacional</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/tecnologia">Tecnología</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/espectaculos">Espectáculos</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/deportes">Deportes</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/diseno">Diseño</NavLink>
      </div>
    </div>
  )
}

const Diseno = () => {
  return (
    <div>
      <div className="paginationDiv">
        <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/politica">Política</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/internacional">Internacional</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/tecnologia">Tecnología</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/espectaculos">Espectáculos</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/deportes">Deportes</NavLink>
        <NavLink className="menuOption" activeClassName="activeOption" to="/diseno">Diseño</NavLink>
      </div>
    </div>
  )
}

// ------------------------------------------COMPONENTE DE LA NOTICIA---------------------------------------------------

const News = (props) => {
  const {img_url, category, title, description, source_name, url} = props;
  return(
    <div className="news">
    <img className="newsImage" src={img_url} alt={category} />
    <h3 className="newsTitle">{letterQuantity(title, 100)}</h3>
    <h3 className="newspaper">{source_name}</h3>
    <div className="infoDiv">
      <a href={url} className="moreInfo">Ver Más</a>
    </div>
  </div>
  )

}