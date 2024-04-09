import React, { Component } from 'react';
import SectionsFourFiveSix from './SectionTwo/SectionsFourFiveSix';
import SectionOneTwoThree from './SectionOne/SectionOneTwoThree';
import AlertSections from './AlertSections';

class MainBody extends Component {
  render() {
    return (
      <div>
        <AlertSections />
        <SectionOneTwoThree/>
        <SectionsFourFiveSix/>
        
      </div>
    );
  }
}

export default MainBody;
