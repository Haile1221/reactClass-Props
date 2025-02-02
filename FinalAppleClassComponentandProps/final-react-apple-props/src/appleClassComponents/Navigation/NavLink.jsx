import React, { Component } from 'react';

class NavLink extends Component {
  render() {
    return (
      <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.linkUrl}> {this.props.linkName}</a></li>
    );
  }
}

export default NavLink;
