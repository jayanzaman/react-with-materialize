import React, { Component } from 'react';

class ContentTable extends Component {
  render(){
    return (
      <table className="highlight centered responsive-table">
        <thead>
          <tr>
            <th data-field="id">Name</th>
            <th data-field="name">Car</th>
            <th data-field="price">Year</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Jayan</td>
            <td>Honda Civic</td>
            <td>2009</td>
          </tr>
          <tr>
            <td>Jisan</td>
            <td>Toyotoa Prius</td>
            <td>2015</td>
          </tr>
          <tr>
            <td>Bappi</td>
            <td>Saturn</td>
            <td>2004</td>
          </tr>
        </tbody>
      </table>

      )
  }
}


export default ContentTable;
