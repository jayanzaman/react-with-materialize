import React, { Component } from 'react';

class NPRpodcastAudio extends Component {
  render(){
    return (
      <div className="container">
        <iframe src="https://www.npr.org/player/embed/459637420/459637421" width="100%" height="218" frameborder="0" scrolling="no" title="NPR embedded audio player">
        </iframe>
        <div className="card-panel">
          <span className="blue-text text-darken-2">The Fed created the money after the financial crisis to try to help the economy, but the money could eventually create inflation or cause bubbles. </span>
        </div>
      </div>
      )
  }
}


export default NPRpodcastAudio;
