import React, { useState } from 'react'

export const Search = (props) => {
  const [town, setTown] = useState('');
  const transfer = () => {
    props.onSearch(town);
  }
  return (
    <>
      <input placeholder="Input city where to search" onChange={({target: {value}}) => {setTown(value)}} />
      <button onClick={transfer}>Search</button>
    </>
  );

}