import React, { Component } from 'react';

import './App.css';
import NavBar from './NavBar';
import FedReserveVideo from './FedReserveVideo';
import NPRpodcastAudio from './NPRpodcastAudio';
import Footer from './Footer';
import Introduction from './Introduction'
// import ChartBubble from './ChartBubble';
import d3Chart from './d3Chart';

class App extends Component {
  render() {
    console.log(d3Chart)
    return (
      <div>
        <NavBar />

        <div className="container">
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
