import React, { Component } from 'react';

class ContentGrid extends Component {
  render(){
    return (
          <div className="row">
            <div className="col s12 card-panel blue lighten-2"><span class="flow-text">This div is 12-columns wide on all screen sizes</span></div>
            <div className="col s6 card-panel blue lighten-2 offset-s6"><span class="flow-text">6-columns (offset-by-6)</span></div>
          </div>
      )
  }
}


export default ContentGrid;
