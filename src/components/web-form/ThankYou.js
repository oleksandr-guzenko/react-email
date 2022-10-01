import React, { Component } from 'react'
import validator from 'validator';
import classnames from 'classnames';

export default class ThankYou extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            preferred: false,
            freeTime: [],
            errors: {}
        };
    }

    onClick = (field, value) => {
        this.props.nextPage(field, value);
    }

    onSetPreferred = (e) => {
        this.setState({preferred: e.target.checked});
    }

    onSubmit = (e) => {
        const errors = {};

        if(!validator.isAlpha(this.state.firstName)) errors.firstName = 'Invalid value';
        if(validator.isEmpty(this.state.firstName)) errors.firstName = 'This field is Required';
        if(!validator.isAlpha(this.state.lastName)) errors.lastName = 'Invalid value';
        if(validator.isEmpty(this.state.lastName)) errors.lastName = 'This field is Required';
        if(!validator.isEmail(this.state.email)) errors.email = 'Invalid value';
        if(validator.isEmpty(this.state.email)) errors.email = 'This field is Required';
        if(!validator.isMobilePhone(this.state.phone)) errors.phone = 'Invalid value';
        if(validator.isEmpty(this.state.phone)) errors.phone = 'This field is Required';

        this.setState({errors: errors});

        
        if(Object.keys(errors).length === 0) {
            this.props.onSubmit(this.state);
        }
    }

    onChecked = (e) => {
        let freeTime = this.state.freeTime;
        const index = freeTime.findIndex(value => value === e.target.value);

        if(index === -1) freeTime.push(e.target.value);
        else freeTime.splice(index, 1);

        this.setState({freeTime: freeTime});
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const errors = this.state.errors;

      return (
      <div className="form_s thankyou_f">
        <h1>Thanks! We’re getting started on your plan.</h1>
        <p>Every fertility journey is unique. One of us will reach out within 48 hours.</p>

            <div className="row">
               <div className="col-sm-6">
                <div className="app_form_control" style={{position: 'relative'}}>
                   <label><span>*</span>First name</label>
                   <input className={classnames('s_input', {'invalid': errors.firstName})} type="text" name="firstName" placeholder="Please enter your first name" onChange={(e) => this.onChange(e)} />
                   <p style={{position: 'absolute', bottom: '-2.2rem', right: 0, color: '#c00'}}>{errors.firstName}</p>
                 </div>  
               </div>

                <div className="col-sm-6">
                    <div className="app_form_control" style={{position: 'relative'}}>
                        <label><span>*</span>Last name</label>
                        <input className={classnames('s_input', {'invalid': errors.lastName})} type="text" name="lastName" placeholder="Please enter your Last name" onChange={(e) => this.onChange(e)} /> 
                        <p style={{position: 'absolute', bottom: '-2.2rem', right: 0, color: '#c00'}}>{errors.lastName}</p>
                    </div>  
                </div>

            <div className="col-sm-6">
                <div className="app_form_control" style={{position: 'relative'}}>
                   <label><span>*</span>Email</label>
                   <input className={classnames('s_input', {'invalid': errors.email})} type="email" name="email" placeholder="Please enter your email" onChange={(e) => this.onChange(e)} />
                   <p style={{position: 'absolute', bottom: '-2.2rem', right: 0, color: '#c00'}}>{errors.email}</p>
                 </div>  
               </div>

             <div className="col-sm-6">
                <div className="app_form_control" style={{position: 'relative'}}>
                   <label><span>*</span>Phone</label>
                   <input className={classnames('s_input', {'invalid': errors.phone})} type="tel" name="phone" placeholder="+1" onChange={(e) => this.onChange(e)} />
                   <p style={{position: 'absolute', bottom: '-2.2rem', right: 0, color: '#c00'}}>{errors.phone}</p>
                 </div>  
               </div>

            <div className="col-sm-12">
                <div className="app_form_control">
                   <div className="app_form_group_title">Do you have a preferred time for us to contact you?</div>
                   <label>No  <input className="s_checkbox" type="checkbox" name="checkbox" onChange={(e) => this.onSetPreferred(e)}/></label>

<div className="subtitle_text">If you choose <strong>"No"</strong> we will contact you during our regular working hours.</div>

                 </div>  
               </div>


            <div className="col-sm-12">
                <div className="app_form_control">
                    <fieldset>
                        <legend className="app_form_group_label">What is the best day to call you?</legend>
                        <ul className="app_quiz_answers ">
                            <li>
                            <div className="app_form_control">
                            <input className="app_checkbox_input" type="checkbox" value="Mon-Fri from - to 10:00am to 02::00pm" onChange={(e) => this.onChecked(e)} /> 
                            <label>Mon-Fri  from - to :<strong>10:00am to 02.00pm</strong></label>
                            </div>
                            </li>

                            <li>
                            <div className="app_form_control">
                            <input className="app_checkbox_input" type="checkbox" value="Sat from - to 10:00am to 02::00pm" onChange={(e) => this.onChecked(e)} /> 
                            <label>Sat from-to <strong>10:00am to 02.00pm</strong></label>
                            </div>
                            </li>
                            <li>
                            <div className="app_form_control">
                            <input className="app_checkbox_input" type="checkbox" value="Sun from - to 12:00am to 02::00pm" onChange={(e) => this.onChecked(e)} /> 
                            <label>Sun from-to <strong>12:00am to 02.00pm</strong></label>
                            </div>
                            </li>
                        </ul>
                    </fieldset>
                </div>  
             </div>
             <div className="col-sm-6">
                <div className="app_form_control">
                    <button className="primary_button sendbtn" type="button" onClick={(e) => this.onSubmit(e)}>Send  <span>&#8594;</span></button>
                </div>  
            </div>
      </div>
      </div>
    )
  }
}
