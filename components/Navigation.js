import React from 'react'
import { Link } from 'react-router-dom'


import '../styles/navigation.css'

const Navigation = (props) => {
  return(
    <ul className="menu">
      <Link to={props.path}>{props.text}</Link>
    </ul>
  );
}

export default Navigation
