import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setData} from '../../actions/formActions';

class Specific extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: this.props.form.data.specific === undefined ? [] : this.props.form.data.specific.split(',')
        };
    }

    onClick = () => {
      this.props.nextPage();
    }

    onChange = (e) => {
        let values = this.state.values;
        const index = values.findIndex(value => value === e.target.value);

        if(index === -1) values.push(e.target.value);
        else values.splice(index, 1);
        
        this.setState({values: values});
        this.props.setData({specific: this.state.values.toString()});
    }
    
    render() {
      const values = [
        'Tried unsuccessfully for 6+ months',
        'Age',
        'Previous pregnancy loss',
        'Family health history',
        'A health diagnosis like PCOS or early menopause',
        'Previous difficulty conceiving',
        'Menstrual cycle changes or irregular',
        'I am single or in a same-sex relationship',
        'Something else',
        'No, just curious about IVF'
      ];

      const specific = this.state.values;

      const items = values.map((value, index) => {
        if(specific.findIndex(indexValue => value === indexValue) === -1) {
          return <li key={index}>
                    <div className="app_form_control">
                        <input className="app_checkbox_input" type="checkbox" value={value} checked={false} onChange={(e) => this.onChange(e)} /> 
                        <label>{value}</label>
                    </div>
                </li>;
        }
        else {
          return <li key={index}>
                    <div className="app_form_control">
                        <input className="app_checkbox_input" type="checkbox" value={value} checked={true} onChange={(e) => this.onChange(e)} /> 
                        <label>{value}</label>
                    </div>
                </li>;
        }
      });

      return (
      <div className="form_s">
        <h1>Are there specific factors that led you to consider IVF?</h1>
        <p>Select all that apply.</p>
        <ul className="app_quiz_answers " id="factors">
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

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, {setData})(Specific);