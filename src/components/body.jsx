import React, { Component } from 'react'
import Slider from './subcomponents/slider';
import Latest from './subcomponents/latest';
import Bookmark from './subcomponents/bookmark';

export default class body extends Component {
  render() {
    return (
      <div id="content">
        <div className="container">
          <Slider/>
          <Latest/>
          <Bookmark/>
        </div>
      </div>
    )
  }
}
