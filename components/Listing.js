
import React, { Component } from 'react'
import '../styles/Listing'

export const Listing = (props) => {
  return (
    <div className='listing-item'>
      <img src={props.imgSrc} />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  );
}