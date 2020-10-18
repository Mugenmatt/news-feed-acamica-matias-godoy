import React from 'react'

export const Search = () => {
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