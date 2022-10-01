import React, { Component } from 'react'

export default class IfYouMenstruate extends Component {
    onClick = (field, value) => {
        this.props.nextPage(field, value);
    }

    render() {
      const values = [
        'Yes',
        'No, they’ve always done their own thing',
        'No, but they used to be'
      ];

      const items = values.map((value, index) => {
        return <li key={index}><button type="button" onClick={(e) => this.onClick('ifYouMenstruate', value)}>{value}</button></li>
      });

      return (
      <div className="form_s">
        <h1>If you menstruate, are your periods 2-7 days long and about the same length every time?</h1>
        <ul className="app-quiz__answers">
            {items}
        </ul>
      </div>
    )
  }
}
