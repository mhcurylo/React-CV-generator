import React, { Component,  PropTypes } from 'react';

export default class extends Component {

  static propTypes = {
    content: PropTypes.object.isRequired,
  };


  render() {
    return (
      <div className="margin-bottom">
        <h5>{this.props.content.time}</h5>
        <h4>{this.props.content.title}</h4>
        <a href={this.props.content.link}>{this.props.content.link}</a>
        <h5>{this.props.content.technologies}</h5>
        <p>{this.props.content.description}</p>
        <ul>
        {this.props.content.content.map((li, keyId) => 
            <li key={keyId}  dangerouslySetInnerHTML={{__html: li}}></li>)}
        </ul>
      </div>
    );
  }
}
