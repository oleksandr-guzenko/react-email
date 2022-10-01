import React, { Component } from 'react'
import {connect} from 'react-redux';
import {setData} from '../../actions/formActions';

class HowOldYou extends Component {
    onClick = (data) => {
      this.props.nextPage();
      this.props.setData(data);
    }

    render() {
      const values = [
        '29 or younger',
        '30-37',
        '38 or older'
      ];

      const data = this.props.form.data.howOldYou;
      const style = {borderColor: '#ef6b43', color: '#ef6b43'};

      const items = values.map((value, index) => {
        if(data === value) return <li key={index}><button type="button" onClick={(e) => this.onClick({howOldYou: value})} style={style}>{value}</button></li>;
        else return <li key={index}><button type="button" onClick={(e) => this.onClick({howOldYou: value})}>{value}</button></li>
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

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, {setData})(HowOldYou);