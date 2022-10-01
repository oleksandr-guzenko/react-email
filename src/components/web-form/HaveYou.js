import React, { Component } from 'react'

export default class HaveYou extends Component {
    onClick = (field, value) => {
        this.props.nextPage(field, value);
    }

    render() {
      const values = [
        'Yes',
        'No',
        'Not sure'
      ];

      const items = values.map((value, index) => {
        return <li key={index}><button type="button" onClick={(e) => this.onClick('haveYou', value)}>{value}</button></li>
      });

      return (
      <div className="form_s">
        <h1>Have you or your partner ever had a miscarriage?</h1>
        <ul className="app-quiz__answers">
            {items}
        </ul>
      </div>
    )
  }
}
