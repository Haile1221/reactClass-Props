import React, { Component } from 'react';

import footerLinksData from './FooterLinksData';



class FooterLinks extends Component {
  render() {
    return (
      <div className="footer-links-wrapper row">
        {footerLinksData.map((section, index) => (
          <div key={index} className={`links-wrapper-${index + 1} col-sm-12 col-md`}>
            {section.title && <h3>{section.title}</h3>}
            {section.columns.map((column, columnIndex) => (
              <div key={columnIndex}>
                {column.title && <h3>{column.title}</h3>}
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default FooterLinks;










// The code you provided is a JSX code snippet that renders a set of footer links. Here's a step-by-step explanation of how the code works:

// The code assumes the existence of an array called footerLinksData which contains the data for the footer links.

// The code starts by rendering a <div> element with the class name "footer-links-wrapper" and the class name "row".

// Inside the <div>, the code uses the map() function to iterate over each item in the footerLinksData array.

// For each item in the footerLinksData array, a <div> element is rendered with a dynamically generated key based on the index value. The class name of the <div> is set using template literals and the index value.

// If the current section has a title property, a <h3> element is rendered with the section's title.

// Inside the current section, the code uses another map() function to iterate over each column in the columns array.

// For each column, a <div> element is rendered with a dynamically generated key based on the columnIndex value.

// If the current column has a title property, a <h3> element is rendered with the column's title.

// Inside the current column, an <ul> element is rendered.

// The code then uses another map() function to iterate over each link in the links array.

// For each link, an <li> element is rendered with a dynamically generated key based on the linkIndex value.

// Inside the <li>, an <a> element is rendered with the href attribute set to the link.url value and the link text as the inner content.

// Finally, the rendered JSX elements are closed, and the code continues to the next item in the footerLinksData array.