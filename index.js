import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { YMaps, Map } from 'react-yandex-maps';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <YMaps>
          <div>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
          </div>
        </YMaps>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
