import React, { Component } from 'react'
import validator from 'validator';
import classnames from 'classnames';
import {connect} from 'react-redux';
import {setData} from '../../actions/formActions';

class ThankYou extends Component {
    onSubmit = (e) => {
        const errors = {};
        const {firstName, lastName, email, phone} = this.props.form.data;

        if(!validator.isAlpha(firstName)) errors.firstName = 'Invalid value';
        if(validator.isEmpty(firstName)) errors.firstName = 'This field is Required';
        if(!validator.isAlpha(lastName)) errors.lastName = 'Invalid value';
        if(validator.isEmpty(lastName)) errors.lastName = 'This field is Required';
        if(!validator.isEmail(email)) errors.email = 'Invalid value';
        if(validator.isEmpty(email)) errors.email = 'This field is Required';
        if(!validator.isMobilePhone(phone)) errors.phone = 'Invalid value';
        if(validator.isEmpty(phone)) errors.phone = 'This field is Required';

        this.props.setData({errors: errors});

        
        if(Object.keys(errors).length === 0) {
            this.props.onSubmit();
        }
    }

    onChecked = (e) => {
        let freeTime = this.props.form.data.freeTime.split(',');
        const index = freeTime.findIndex(value => value === e.target.value);

        if(index === -1) freeTime.push(e.target.value);
        else freeTime.splice(index, 1);

        this.props.setData({freeTime: freeTime.toString()});
    }

    onChange = (e) => {
        if(e.target.name === 'phone') {
            const number = e.target.value;
            const charCode = number.charCodeAt(number.length -1);

            if(charCode === 32 || (charCode === 43 && number.length === 1) || (charCode === 45 && number.length !== 1) || (charCode <= 57 && charCode >= 48) || number === '') this.props.setData({[e.target.name]: e.target.value});
        }
        else this.props.setData({[e.target.name]: e.target.value});
    }

    render() {
        const {
            firstName,
            lastName,
            email,
            phone,
            freeTime,
            errors
        } = this.props.form.data;

      return (
      <div className="form_s thankyou_f">
        <h1>Thanks! We’re getting started with your plan</h1>
        <p style={{marginBottom: 0}}>Every fertility journey is unique. One of us will reach out within 48 hours.</p>

            <div className="row">
               <div className="col-12 pr-1 pl-1">
                <div className="app_form_control" style={{position: 'relative'}}>
                   <input className={classnames('s_input', {'invalid': errors.firstName})} value={firstName} type="text" name="firstName" placeholder="First Name" onChange={(e) => this.onChange(e)} />
                   <p style={{position: 'absolute', bottom: '-2.2rem', left: '1.5rem', color: '#c00'}}>{errors.firstName}</p>
                 </div>  
               </div>

                <div className="col-12">
                    <div className="app_form_control" style={{position: 'relative'}}>
                        <input className={classnames('s_input', {'invalid': errors.lastName})} value={lastName} type="text" name="lastName" placeholder="Last Name" onChange={(e) => this.onChange(e)} /> 
                        <p style={{position: 'absolute', bottom: '-2.2rem', left: '1.5rem', color: '#c00'}}>{errors.lastName}</p>
                    </div>  
                </div>

            <div className="col-12">
                <div className="app_form_control" style={{position: 'relative'}}>
                   <input className={classnames('s_input', {'invalid': errors.email})} value={email} type="email" name="email" placeholder="Email" onChange={(e) => this.onChange(e)} />
                   <p style={{position: 'absolute', bottom: '-2.2rem', left: '1.5rem', color: '#c00'}}>{errors.email}</p>
                 </div>  
               </div>

             <div className="col-12">
                <div className="app_form_control" style={{position: 'relative'}}>
                   <input className={classnames('s_input', {'invalid': errors.phone})} value={phone} type="tel" name="phone" placeholder="Phone Number" onChange={(e) => this.onChange(e)} />
                   <p style={{position: 'absolute', bottom: '-2.2rem', left: '1.5rem', color: '#c00'}}>{errors.phone}</p>
                 </div>  
               </div>


            <div className="col-sm-12">
                <div className="app_form_control">
                    <fieldset>
                        <legend className="app_form_group_label">What is the best time to contact you?</legend>
                        <ul className="app_quiz_answers free-time">
                            <li>
                                <div className="app_form_control">
                                <input 
                                    className="app_checkbox_input" 
                                    type="checkbox" 
                                    value="Anytime" 
                                    onChange={(e) => this.onChecked(e)}
                                    checked={freeTime.indexOf('Anytime') !== -1}
                                /> 
                                <label>Anytime</label>
                                </div>
                            </li>
                            <li>
                                <div className="app_form_control">
                                <input 
                                    className="app_checkbox_input" 
                                    type="checkbox" 
                                    value="Weekdays mornings" 
                                    onChange={(e) => this.onChecked(e)}
                                    checked={freeTime.indexOf('Weekdays mornings') !== -1}
                                /> 
                                <label>Weekdays mornings</label>
                                </div>
                            </li>
                            <li>
                                <div className="app_form_control">
                                <input 
                                    className="app_checkbox_input" 
                                    type="checkbox" 
                                    value="Weekends mornings" 
                                    onChange={(e) => this.onChecked(e)}
                                    checked={freeTime.indexOf('Weekends mornings') !== -1}
                                /> 
                                <label>Weekends mornings</label>
                                </div>
                            </li>
                            <li>
                                <div className="app_form_control">
                                <input 
                                    className="app_checkbox_input" 
                                    type="checkbox" 
                                    value="Weekends mornings" 
                                    onChange={(e) => this.onChecked(e)}
                                    checked={freeTime.indexOf('Weekends mornings') !== -1}
                                /> 
                                <label>Weekdays afternoons</label>
                                </div>
                            </li>
                            <li>
                                <div className="app_form_control">
                                <input 
                                    className="app_checkbox_input" 
                                    type="checkbox" 
                                    value="Weekends afternoons" 
                                    onChange={(e) => this.onChecked(e)}
                                    checked={freeTime.indexOf('Weekends afternoons') !== -1}
                                /> 
                                <label>Weekends afternoons</label>
                                </div>
                            </li>
                        </ul>
                    </fieldset>
                </div>  
             </div>
             <div className="col-sm-6">
                <div className="app_form_control" style={{marginTop: 0}}>
                    <button className="primary_button sendbtn" type="button" onClick={(e) => this.onSubmit(e)}>Send  <span>&#8594;</span></button>
                </div>  
            </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    form: state.form,
  });

  export default connect(mapStateToProps, {setData})(ThankYou);