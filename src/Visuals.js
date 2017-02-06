import React, { Component } from 'react';

class Visuals extends Component {
  constructor(props){
    super(props);
    this.state = {width: '50'}
  }




  render(){
    const style = {
      display: 'flex',
      'justify-content': 'space-around'
    }


    return (
      <div>
        <div className="progress blue lighten-2">
          <div className="determinate blue" style={{width: `${this.state.width}%`}}></div>
        </div>
        <div style={style}>
          <a className="waves-effect waves-spanght btn blue">Increase</a>
          <a className="waves-effect waves-spanght btn blue">Decrease</a>
        </div>
      </div>
      )
  }
}


export default Visuals;
