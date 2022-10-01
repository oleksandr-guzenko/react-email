import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setData} from '../../actions/formActions';

class IfYouMenstruate extends Component {
    onClick = (data) => {
      this.props.nextPage();
      this.props.setData(data);
    }

    render() {
      const values = [
        'Yes',
        'No, they’ve always done their own thing',
        'No, but they used to be'
      ];

      const data = this.props.form.data.IfYouMenstruate;
      const style = {borderColor: '#ef6b43', color: '#ef6b43'};

      const items = values.map((value, index) => {
        if(data === value) return <li key={index}><button type="button" onClick={(e) => this.onClick({IfYouMenstruate: value})} style={style}>{value}</button></li>;
        else return <li key={index}><button type="button" onClick={(e) => this.onClick({IfYouMenstruate: value})}>{value}</button></li>
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

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, {setData})(IfYouMenstruate);