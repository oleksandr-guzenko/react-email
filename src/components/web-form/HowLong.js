import React, { Component } from 'react'

export default class HowSoon extends Component {
    onClick = (field, value) => {
        this.props.nextPage(field, value);
    }

    render() {
      const values = [
        'Less than 6 months',
        'Between 6 months and a year',
        'Longer than a year'
      ];

      const items = values.map((value, index) => {
        return <li key={index}><button type="button" onClick={(e) => this.onClick('howLong', value)}>{value}</button></li>
      });

      return (
      <div className="form_s">
        <h1>How long have you been trying to conceive?</h1>
        <ul className="app-quiz__answers">
            {items}
        </ul>
      </div>
    )
  }
}
