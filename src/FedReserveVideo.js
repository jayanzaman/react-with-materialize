import React, { Component } from 'react';

class FedReserveVideo extends Component {
  render(){
    return (
        <div>
          <h4>How Federal Reserve Set The Interest Rate</h4>

            <div className="video-container">
              <iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0" width="500" height="300" src="https://video-api.wsj.com/api-video/player/iframe.html?guid=B51D47B6-91DC-4D84-BD27-74AF3E587D9A"></iframe>
            </div>
            <div className="card-panel">
              <span className="blue-text text-darken-2">The Federal Reserve has kept interest rates at near zero since the 2008 financial crisis. To raise them, it has come up with a new set of tools.ss</span>
            </div>
          </div>
      )
  }
}


export default FedReserveVideo;
