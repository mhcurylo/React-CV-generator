import React, { Component,  PropTypes } from 'react';
import Element from '../Element';
import './Elementary.scss';

export default class extends Component {

  static propTypes = {
    content: PropTypes.array.isRequired,
  };


  render() {
    return (
      <div className="elementary">
        {this.props.content.map((elementContent, keyId) => 
              <Element key={keyId}
                          title={elementContent.title}
                          link ={elementContent.link}
                          content = {elementContent.content}/>)}
       </div>
    );
  }
}
