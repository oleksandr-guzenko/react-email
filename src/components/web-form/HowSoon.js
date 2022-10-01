import React, { Component } from 'react'

export default class HowSoon extends Component {
    onClick = (field, value) => {
        this.props.nextPage(field, value);
    }

    render() {
      const values = [
        'ASAP!',
        'Within a year or two',
        'Within the next few years',
        'I’m not sure, but I want to know my options',
      ];

      const items = values.map((value, index) => {
        return <li key={index}><button type="button" onClick={(e) => this.onClick('howSoon', value)}>{value}</button></li>
      });

      return (
      <div className="form_s">
        <h1>How soon do you want to have a baby?</h1>
        <ul className="app-quiz__answers">
          {items}
        </ul>
      </div>
    )
  }
}
