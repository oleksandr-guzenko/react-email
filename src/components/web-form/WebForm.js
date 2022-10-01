import React, { Component } from 'react'
import { connect } from "react-redux";
import emailjs, { init } from "@emailjs/browser";

import StartForm from './StartForm';
import HowSoon from './HowSoon';
import HowLong from './HowLong';
import HowOldYou from './HowOldYou';
import IfYouMenstruate from './IfYouMenstruate';
import HaveYou from './HaveYou';
import HaveYouExperienced from './HaveYouExperienced';
import Specific from './Specific';
import ThankYou from './ThankYou';

import {nextPage} from '../../actions/formActions';

class WebForm extends Component {
  constructor() {
    super();

    this.state = {
    };

  }

  nextPage = (field, value) => {
    if(field !== undefined) this.setState({[field]: value});
    this.props.nextPage();
  }

  onSubmit = (formData) => {
    const data = {...this.state, ...formData};

    console.log(data);

    emailjs.send("SERVICE_ID","TEMPLATE_ID", data, 'USER_ID');
  }

  render() {
    const pageIndex = this.props.form.pageIndex;
    const pages = [
      <StartForm nextPage={this.nextPage} />,
      <HowSoon nextPage={this.nextPage} />,
      <HowLong nextPage={this.nextPage} />,
      <HowOldYou nextPage={this.nextPage} />,
      <IfYouMenstruate nextPage={this.nextPage} />,
      <HaveYou nextPage={this.nextPage} />,
      <HaveYouExperienced nextPage={this.nextPage} />,
      <Specific nextPage={this.nextPage} />,
      <ThankYou onSubmit={this.onSubmit} />
    ];
    

    return (
      <div className="container">
        { pages[pageIndex] }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, {nextPage})(WebForm);