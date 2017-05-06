import React, { Component } from 'react';
import Sf from './Sf'

class City extends Component {
  render() {
    return (
      <div className="City">
        <div className="City-header">
          <h2>future city page</h2>
        </div>
        <div>image of city </div>
        <div> reviews / blog posts </div>
        // <h2><Link to={'/cities/1'}> to San Francisco! </Link></h2>
        <Sf />
      </div>
    );
  }
}

export default City;
