import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

//const style = {display: block}

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='all' onScrollDown={() => {console.log('sddsg')}}>
        <p>sdgfdsgfgfdg</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
