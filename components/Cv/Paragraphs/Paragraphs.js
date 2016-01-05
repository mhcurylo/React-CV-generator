import React, { Component,  PropTypes } from 'react';

export default class extends Component {

  static propTypes = {
    content: PropTypes.object.isRequired,
  };


  render() {
    return (
      <div className="margin-bottom">
      <h3 className="margin-bottom">{this.props.content.title}</h3>
        {this.props.content.content.map((paragraph, keyId) => 
          <p key={keyId} dangerouslySetInnerHTML={{__html: paragraph}}></p>)}
      </div>
    );
  }
}
