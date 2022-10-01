import React, { Component } from 'react'
import { connect } from "react-redux";
import emailjs, { init } from "@emailjs/browser";
import Swal from 'sweetalert2';

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
    this.props.nextPage();
  }

  onSubmit = () => {
    emailjs
      .send("service_ujfsbjc","template_90xr8k4", this.props.form.data, 'xWJPCKETg5lDc1pLN')
      .then(function(response) {
        Swal.fire({
          icon: 'success',
          text: 'Thanks for sending your details. We will review your details and one of our team member will call you back to discuss.'
        });
     }, function(error) {
        console.log('FAILED...', error);
     });
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