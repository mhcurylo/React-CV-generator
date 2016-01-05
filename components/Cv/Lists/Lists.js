import React, { Component,  PropTypes } from 'react';
import List from '../List';

export default class extends Component {

  static propTypes = {
    content: PropTypes.object.isRequired,
  };


  render() {
    return (
      <div className="margin-bottom">
        <h3 className="margin-bottom">{this.props.content.title}</h3>
        {this.props.content.content.map((list, keyId) => 
            <List key={keyId} content={list}/>)}
      </div>
    );
  }
}
