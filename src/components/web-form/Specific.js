import React, { Component } from 'react'

export default class Specific extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: []
        };
    }

    onClick = () => {
      if(this.state.values.length > 0) this.props.nextPage('specific', this.state.values.toString());
    }

    onChange = (e) => {
        let values = this.state.values;
        const index = values.findIndex(value => value === e.target.value);

        if(index === -1) values.push(e.target.value);
        else values.splice(index, 1);
        
        this.setState({values: values});
    }
    
    render() {
      const values = [
        'I amm in a same-sex couple',
        'Tried unsuccessfully for 6+ months',
        'Age',
        'Previous pregnancy loss',
        'Family health history',
        'A health diagnosis like PCOS or early menopause',
        'Previous difficulty conceiving',
        'Menstrual cycle changes or irregularities',
        'Something else',
        'No, just curious about IVF'
      ];

      const items = values.map((value, index) => {
        return  <li key={index}>
                    <div className="app_form_control">
                        <input className="app_checkbox_input" type="checkbox" value={value} onChange={(e) => this.onChange(e)} /> 
                        <label>{value}</label>
                    </div>
                </li>
      });

      return (
      <div className="form_s">
        <h1>Are there specific factors that led you to consider IVF?</h1>
        <p>Select all that apply.</p>
        <ul className="app_quiz_answers ">
            {items}
        </ul>
        <div className="col-sm-12">
            <div className="app_form_control">
                <button className="primary_button sendbtn" type="button" onClick={() => this.onClick()}>Continue  <span>&#8594;</span></button>
            </div>  
        </div>
      </div>
    )
  }
}
