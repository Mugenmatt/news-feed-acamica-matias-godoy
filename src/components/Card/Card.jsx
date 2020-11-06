import React from 'react';
import letterQuantity from '../../utils/letterQuantity'

export const Card = (props) => {
    const {img_url, category, title, source_name, url} = props;
    return(
      <div className="news">
      <img className="newsImage" loading="lazy" src={img_url} alt={category} />
      <h3 className="newsTitle">{letterQuantity(title, 80)}...</h3>
      <h3 className="newspaper">{source_name}</h3>
      <h1 style={{'color':'red'}}>{category}</h1>
      <div className="infoDiv">
        <a href={url} target="_blank" rel="noopener noreferrer" className="moreInfo">Ver Más</a>
      </div>
    </div>
    )
  
  }