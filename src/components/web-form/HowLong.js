import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setData} from '../../actions/formActions';

class HowLong extends Component {
    onClick = (data) => {
      this.props.nextPage();
      this.props.setData(data);
    }

    render() {
      const values = [
        'Less than 6 months',
        'Between 6 months and a year',
        'Longer than a year'
      ];

      const data = this.props.form.data.howLong;
      const style = {borderColor: '#ef6b43', color: '#ef6b43'};

      const items = values.map((value, index) => {
        if(data === value) return <li key={index}><button type="button" onClick={(e) => this.onClick({howLong: value})} style={style}>{value}</button></li>;
        else return <li key={index}><button type="button" onClick={(e) => this.onClick({howLong: value})}>{value}</button></li>
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

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, {setData})(HowLong);