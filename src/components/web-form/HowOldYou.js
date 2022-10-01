import React, { Component } from 'react'

export default class HowOldYou extends Component {
    onClick = (field, value) => {
        this.props.nextPage(field, value);
    }

    render() {
      const values = [
        '29 or younger',
        '30-37',
        '38 or older'
      ];

      const items = values.map((value, index) => {
        return <li key={index}><button type="button" onClick={(e) => this.onClick('howOldYou', value)}>{value}</button></li>
      });

      return (
      <div className="form_s">
        <h1>How old are you?</h1>
        <ul className="app-quiz__answers">
            {items}
        </ul>
      </div>
    )
  }
}
