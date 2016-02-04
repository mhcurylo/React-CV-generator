import React, { Component,  PropTypes } from 'react';
import Paragraphs from '../Paragraphs';
import Lists from '../Lists';
import './Sections.scss';

export default class extends Component {

  static propTypes = {
    content: PropTypes.array.isRequired,
  };

  render() {
    return (
        <div className="limited">
            {this.props.content.map((section, keyId) => {
                switch (section.type) {
                    case "paragraphs": 
                        return <Paragraphs key={keyId} content={section}/>
                    case "lists":
                        return <Lists key={keyId} content={section}/>
                }
            })}
        </div>
    );
  }
}

