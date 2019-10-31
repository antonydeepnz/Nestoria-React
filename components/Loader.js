import React, { Component } from 'react'
import '../styles/loader.css'

export const Loader = () => {
  return(
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
