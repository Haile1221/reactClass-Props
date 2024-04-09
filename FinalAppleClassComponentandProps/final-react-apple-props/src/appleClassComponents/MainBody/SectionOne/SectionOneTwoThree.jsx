import React, { Component } from 'react';

import SectionOneTwoThreeLinks from './SectionOneTwoThreeLinks';
import SectionOneTwoThreeData from './SectionOneTwoThreeData';

class SectionOneTwoThree extends Component {
  render() {
    return (
      <div>
        {/* This code maps over an array of data called SectionOneTwoThreeData, rendering a component called SectionOneTwoThreeLinks for each element in the array. The key prop is assigned with the index of each element, and the spread operator {...section} passes all properties of each element as props to the SectionOneTwoThreeLinks component. */}
              {SectionOneTwoThreeData.map((section, index) => (
        <SectionOneTwoThreeLinks key={index} {...section} />
      ))} 
      </div>
    );
  }
}

export default SectionOneTwoThree;
