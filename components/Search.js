import React, { useState } from 'react'

import '../styles/search.css'

export const Search = (props) => {
  const [town, setTown] = useState('');
  const transfer = () => {
    props.onSearch(town);
  }
  return (
    <div className="search">
      <input placeholder="Input city where to search" onChange={({target: {value}}) => {setTown(value)}} />
      <button onClick={transfer}>Search</button>
    </div>
  );

}