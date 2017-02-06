import React, { Component } from 'react';
import { BarChart, PieChart } from 'react-d3-components';

class d3Chart extends Component {
  render(){
    let data = [{
    label: 'somethingA',
    values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];



    let sort = null;
    console.log(PieChart)
    return (
      <div className="container">
       <BarChart

          data={data}
          width={400}
          height={400}
          margin={{top: 10, bottom: 50, left: 50, right: 10}}
        />


      </div>
      )
  }
}


export default d3Chart;
