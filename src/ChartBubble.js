import React, { Component } from 'react';



class ChartBubble extends Component {


  render(){
    return (
        <div>
          <div id="container" >
            <canvas id="canvas"></canvas>
          </div>

            <span><a id="randomizeData" className="waves-effect waves-spanght btn blue">Randomize Data</a></span>
            <span><a id="addDataset" className="waves-effect waves-spanght btn blue">Add Dataset</a></span>
            <span><a id="removeDataset" className="waves-effect waves-spanght btn blue">Remove Dataset</a></span>
            <span><a id="addData" className="waves-effect waves-spanght btn blue">Add Data</a></span>
            <span><a id="removeData" className="waves-effect waves-spanght btn blue">Remove Data</a></span>

        </div>
      )
  }
}


export default ChartBubble;
