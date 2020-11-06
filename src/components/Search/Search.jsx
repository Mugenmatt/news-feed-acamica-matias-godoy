import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import * as actions from '../../actions/actions'
import { Redirect } from 'react-router-dom';
import WordSearch from '../Pages/WordSearch';


export const Search = (props) => {

  const dispatch = useDispatch()
  const [word, setWord] = useState('')
  const [loading, setLoading] = useState(false)

  const handleWordSearch = e => {
    e.preventDefault()
    setWord(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(actions.fetchWord(word));
  }

    return(
      <div className="containerHeaderUp">
        <h1 className="mainTitle">News Feeds</h1>
        <form className="searcher" onSubmit={handleSubmit}>
        <input className="inputSearch" type="text" value={word} placeholder="Buscar" onChange={handleWordSearch} />
        <button className="searchBtn">Buscar</button>
        <i className="fas fa-search"></i>
        </form>
      </div>
    )
  }