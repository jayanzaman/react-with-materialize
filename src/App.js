import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import FedReserveVideo from './FedReserveVideo';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <FedReserveVideo />
            <div className="container">
              <iframe src="https://www.npr.org/player/embed/459637420/459637421" width="100%" height="218" frameborder="0" scrolling="no" title="NPR embedded audio player">
              </iframe>

            </div>

          <div className="card-panel">
            <span className="blue-text text-darken-2">The Fed created the money after the financial crisis to try to help the economy, but the money could eventually create inflation or cause bubbles. </span>
          </div>

          <div className="row">
            <div className="col s12 card-panel blue lighten-2"><span class="flow-text">This div is 12-columns wide on all screen sizes</span></div>
            <div className="col s6 card-panel blue lighten-2 offset-s6"><span class="flow-text">6-columns (offset-by-6)</span></div>
{/*            <table className="highlight centered responsive-table">
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
 */}

          </div>
        </div>
      </div>

    );
  }
}

export default App;
