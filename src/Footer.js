import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return (
        <footer className="page-footer blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About</h5>
                <p className="grey-text text-lighten-4">The purpose of this website is to educate the public about Federal Monetary Policy.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Relevant Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://www.federalreserve.gov/">www.federalreserve.gov</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.newyorkfed.org/">www.newyorkfed.org</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://en.wikipedia.org/wiki/Federal_Reserve_System">www.wikipedia.org</a></li>
                  <li><a className="grey-text text-lighten-3" href="http://www.investopedia.com/university/thefed/fed1.asp!">www.investopedia.com</a></li>

                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Jayan Zaman
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
      )
  }
}


export default Footer;
