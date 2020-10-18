import React from 'react'
import './Menu'
import {NavLink} from 'react-router-dom';

export const Menu = (props) => {
    return(
      <div>
        <div className="paginationDiv">
            <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/politica">Política</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/internacional">Internacional</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/tecnologia">Tecnología</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/espectaculos">Espectáculos</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/deportes">Deportes</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/diseno">Diseño</NavLink>
          </div>
      </div>
    )
  }