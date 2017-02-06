import React, { Component } from 'react';

class Visuals extends Component {
  constructor(props){
    super(props);
    this.state = {width: '50'};
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    let prevWidth = this.state.width;
    if(prevWidth < 100){
      let newWidth = (prevWidth * 1) + 10;
      this.setState ( prevState => ({
        width: newWidth
      }));
    }

  }
  decrease() {
    let prevWidth = this.state.width;
    if(prevWidth > 0){
      let newWidth = (prevWidth * 1) - 10;
      this.setState (prevState => ({
        width: newWidth
      }))
    }
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
          <a onClick={this.increase} className="waves-effect waves-spanght btn blue">Increase</a>
          <a onClick={this.decrease} className="waves-effect waves-spanght btn blue">Decrease</a>
        </div>
      </div>
      )
  }
}


export default Visuals;
