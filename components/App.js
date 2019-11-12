import React, { Component } from 'react'
import { connect } from 'react-redux'

/////STYLES IMPORT
import '../styles/App.css'

/////COMPONENTS IMPORT
import { Header } from './Header'

const App = () => {
 return (
      <div className='app'>
        <Header /> 
      </div>
  );
}

export default App;
