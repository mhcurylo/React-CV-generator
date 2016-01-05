import React, { Component,  PropTypes } from 'react';
import Paragraphs from '../Paragraphs';
import Lists from '../Lists';

export default class extends Component {

  static propTypes = {
    content: PropTypes.array.isRequired,
  };

  render() {
    return (
        <div>
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

