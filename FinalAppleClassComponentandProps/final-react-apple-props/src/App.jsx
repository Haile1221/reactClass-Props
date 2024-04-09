import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "./assets/CommonResources/css/styles.css"
import Nav from './appleClassComponents/Navigation/Nav';
import MainBody from './appleClassComponents/MainBody/MainBody';
import Footer from './appleClassComponents/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <MainBody/>
        <Footer/>
      </div>
    );
  }
}

export default App;
