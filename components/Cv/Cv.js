import React, { Component } from 'react';
import content from '../../cv.content';
import Elementary from './Elementary';
import Sections from './Sections';
import './Cv.scss';

export default class extends Component {
  render() {
    return (
        <div className="cv-container">
          <div className="cv-container--elementary">
            <h1>{content.person}</h1>
            <Elementary content={content.elementary}/>
            <button className="print" onClick={window.print}>PRINT</button>
          </div>
          <div className="cv-container--sections">
            <Sections content={content.sections}/>
          </div>
        </div>
    );
  }
}
