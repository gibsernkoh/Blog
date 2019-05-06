import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import './App.css';

import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <StickyContainer>
        <Sticky>{({style}) => <Header style={style} />}</Sticky>
        <Body />
        <Footer />
      </StickyContainer>
    );
  }
}

export default App;
