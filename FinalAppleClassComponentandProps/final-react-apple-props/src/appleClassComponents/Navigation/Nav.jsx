import React, { Component } from 'react';
import NavLink from './NavLink';

import LogoImg from "../../assets/CommonResources/images/icons/logo-sm.png"
import SearchImg from "../../assets/CommonResources/images/icons/search-icon-sm.png"
import CartImg from "../../assets/CommonResources/images/icons/cart-sm.png"


class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                ☰
            </button>
            <a className="navbar-brand mx-auto" href="#"><img src={LogoImg}/></a>
  
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav nav-justified w-100 nav-fill">
<NavLink linkUrl="/mac" linkName = "Abebe" />
               

               <NavLink linkUrl="iphone" linkName="iphone" />
               <NavLink linkUrl="#" linkName="gggfg" />
               <NavLink linkUrl="#" linkName="abebe" />


              <NavLink linkUrl="/mac/"  linkName="Mac"/>
              <NavLink linkUrl="/iphone/"  linkName="iphone"/>

              <NavLink linkUrl="/ipad/"  linkName="ipad"/>

              <NavLink linkUrl="/watch/"  linkName="watch"/>

              <NavLink linkUrl="/Tv/"  linkName="Tv"/>

              <NavLink linkUrl="/Music/"  linkName="Music"/>
              <NavLink linkUrl="/Support/"  linkName="Support"/>

                          <li className="nav-item" ><a className="nav-link js-scroll-trigger" href="/search/"><img src={SearchImg}/></a></li>
              <li className="nav-item"><a  className="nav-link js-scroll-trigger" href="/cart/"><img src={CartImg}/></a></li>
                </ul>
            </div>
        </nav>
      </div>
    </div>
    );
  }
}

export default Nav;
