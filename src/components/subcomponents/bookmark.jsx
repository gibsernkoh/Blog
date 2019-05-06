import React, { Component } from 'react'
import { Icon, Button } from 'antd';
import imgBookmark from './bookmark.jpg'; 
export default class bookmark extends Component {

  handleClick = e => {
    e.preventDefault();
  }

  render() { 
    return (
      <div className="max-offset">
        <div className="bookmark section">
            <div className="container">
                <div className="bookmark-grid">
                    <h2>The hype is real!
                        <small>誇大広告は本物です</small></h2>
                    <img id="image1" src={imgBookmark} alt="We don't do that here" className="img-responsive" />
                    <img id="image2" src={imgBookmark} alt="We don't do that here" className="img-responsive" />
                    <div className="bookmark-description">
                        <p>Download? We don't do that here.</p>
                        <p>Simply add our site to your screen!</p>
                        <p>Yes. It's that simple <Icon type="smile" /></p>
                        <br/>
                        <p>
                          <Button disabled={true} icon="download" type="primary" size="large" >Download</Button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
