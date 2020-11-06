import React from 'react'
import './Menu'
import {NavLink} from 'react-router-dom';

export const Menu = () => {
    return(
      <div>
        <div className="paginationDiv">
            <NavLink className="menuOption" activeClassName="activeOption" exact to="/">Home</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/1">Política</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/2">Internacionales</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/3">Tecnología</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/4">Espectáculos</NavLink>
            <NavLink className="menuOption" activeClassName="activeOption" to="/news/category/5">Deportes</NavLink>
          </div>
      </div>
    )
  }