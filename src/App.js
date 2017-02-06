import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import FedReserveVideo from './FedReserveVideo';
import NPRpodcastAudio from './NPRpodcastAudio';
import Footer from './Footer';
import Introduction from './Introduction'
import Visuals from './Visuals';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <Visuals />
          <d3Chart />
          <Introduction />
          <FedReserveVideo />
          <NPRpodcastAudio />
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;
