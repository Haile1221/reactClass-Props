import React, { Component } from 'react';

import WatchSeriesLogo from "../../../assets/CommonResources/images/icons/watch-series5-logo.png"
import AppleTvlogo from "../../../assets/CommonResources/images/icons/apple-tv-logo.png"
import banKerImg from "../../../assets/CommonResources/images/home/banker.png"
import imgArcade from "../../../assets/CommonResources/images/icons/arcade.png"





class SectionsFourFiveSixLink extends Component {
  render() {
    const { leftComponent } = this.props;
    return (
      <>
      <section className={this.props.heghlightWrapper}>
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                {leftComponent && (
                  <div>
                    <div className="title-wraper">iPhone 11</div>
                    <div className="description-wraper">
                      Just the right amount of everything.
                    </div>
                    <div className="price-wrapper">
                      From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                    </div>
                    <div className="links-wrapper">
                      <ul>
                        <li><a href="">Learn more</a></li>
                        <li><a href="">Apply now</a></li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* left side for section five  */}

                {this.props.fithLeft &&(<div> 

              <div class="top-logo-wrapper">
              <div class="logo-wrapper">
                <img src={AppleTvlogo} />
              </div>
            </div>

            <div class="tvshow-logo-wraper">
              <img src={banKerImg} />
            </div>

            <div class="watch-more-wrapper">
              <a href="#">Watch now on the Apple TV App</a>
            </div>


                </div>)}

                 {/* left side for section Six  */}

             { this.props.sixthLeft &&( 
              <div>
              <div class="top-logo-wrapper">
              <div class="logo-wrapper">
                <img src={imgArcade} />
              </div>
            </div>
            <div class="description-wraper white">
              Agent 8 is a small hero on a big mission.
            </div>
            <div class="links-wrapper">
              <ul>
                <li>
                  <a href="">Play now<sup>2</sup></a>
                </li>
                <li><a href="">Learn about Apple Arcade</a></li>
              </ul>
            </div>
            </div>
          )}

                


              </div>
            </div>

            {/* after here right sections */}
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
        {this.props.rightComponent &&( 
        <div>
                <div className="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>
                <div className="links-wrapper white">
                  <ul>
                    <li><a href="">Watch the PSA</a></li>
                  </ul>
                </div> </div>)
                
                }

{/* fifth right Component */}
{ this.props.topLogoComponent &&(
<div>

<div class="top-logo-wrapper">
              <div class="logo-wrapper">
                <img src={WatchSeriesLogo} />
              </div>
            </div>
            <div class="description-wraper">
              With the Always-On Retina display.<br />
              You’ve never seen a watch like this.
            </div>
            <div class="links-wrapper">
              <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">Buy</a></li>
              </ul>
            </div>

</div>)}

{/*sixth right Component */}

{this.props.sixthRight &&(<div>


<div class="title-wraper">Apple Card Monthly Installments</div>
            <div class="description-wraper">
              Pay for your next iPhone over time, interest-free with Apple
              Card.
            </div>
            <div class="links-wrapper">
              <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">Apply now</a></li>
              </ul>
            </div>

</div>)}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    );
  }
}

export default SectionsFourFiveSixLink;
