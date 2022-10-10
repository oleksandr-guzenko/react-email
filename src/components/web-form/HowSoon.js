import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setData} from '../../actions/formActions';

class HowSoon extends Component {
    onClick = (data) => {
        this.props.nextPage();
        this.props.setData(data);
    }

    render() {
      const values = [
        'ASAP!',
        'Within a year or two',
        'Within the next few years',
        'I’m not sure, but I want to know my options',
      ];

      const data = this.props.form.data.howSoon;
      const style = {borderColor: '#ef6b43', color: '#ef6b43'};

      const items = values.map((value, index) => {
        if(data === value) return <li key={index}><button type="button" onClick={(e) => this.onClick({howSoon: value})} style={style}>{value}</button></li>;
        else return <li key={index}><button type="button" onClick={(e) => this.onClick({howSoon: value})}>{value}</button></li>
      });

      return (
      <div className="form_s">
        <h1>How soon do you want to have a baby?</h1>
        <p className="header-gap"></p>
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

export default connect(mapStateToProps, {setData})(HowSoon);