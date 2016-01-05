import React, { Component,  PropTypes } from 'react';
import './Element.scss';


export default class extends Component {

  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string
  };

  render() {
    return (
      <div className="elementary__element">
          <div className="elementary__element__title">{this.props.title} </div>
          {this.props.link ?
            <div className="elementary__element__content"> <a className="white" href={this.props.link}>
              {this.props.content}
              </a></div> :
            <div className="elementary__element__content">{this.props.content}</div>
          }

      </div>
    );
  }
}
