import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import FedReserveVideo from './FedReserveVideo';
import NPRpodcastAudio from './NPRpodcastAudio';
import Footer from './Footer';
import Introduction from './Introduction'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
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
