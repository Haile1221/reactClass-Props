import React, { Component } from 'react';
import SectionsFourFiveSixData from './SectionsFourFiveSixData';
import SectionsFourFiveSixLink from './SectionsFourFiveSixLink';

class SectionsFourFiveSix extends Component {
  render() {
    return (
      <div>

<SectionsFourFiveSixLink 
 heghlightWrapper= "fourth-heghlight-wrapper"
 leftComponent= {true}
 rightComponent={true}
/>

{/* method II */}


        {/* Rendering SectionFourFiveSixLinks with each section's Data */}
        {/* <SectionFourFiveSixLinks {...SectionFourFiveSixData.sectionFourData} /> */}

        
        <SectionsFourFiveSixLink {...SectionsFourFiveSixData.sectionFiveData} />   
        <SectionsFourFiveSixLink {...SectionsFourFiveSixData.sectionSixData} />
      </div>
    );
  }
}

export default SectionsFourFiveSix;
