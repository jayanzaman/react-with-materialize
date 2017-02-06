import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import FedReserveVideo from './FedReserveVideo';
import NPRpodcastAudio from './NPRpodcastAudio';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <FedReserveVideo />
          <NPRpodcastAudio />

        </div>
      </div>

    );
  }
}

export default App;
