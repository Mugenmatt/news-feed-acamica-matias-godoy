import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions/actions'
import WordSearch from '../Pages/WordSearch';


export const Search = (props) => {

  // console.log(props);

  const dispatch = useDispatch()
  const [word, setWord] = useState('')

  const handleWordSearch = e => {
    setWord(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(actions.fetchWord(word));
    setWord('')
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