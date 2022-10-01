import React, { Component } from 'react'
import { connect } from "react-redux";
import {prevPage, clearData} from '../../actions/formActions';

class Header extends Component {
  onClick = (e) => {
    if(this.props.form.pageIndex > 0) this.props.prevPage();
  }

  onExit = (e) => {
    this.props.clearData();
  }

  render() {
    let spans = [];
    let i = 0;
    const pageIndex = this.props.form.pageIndex;
    for(i = 0; i < 8; i ++) {
      if(i < pageIndex) spans.push(<span style={{borderColor: '#cc3300'}} key={i}></span>);
      else spans.push(<span key={i}></span>);
    }
    return (
      <>
        <div className="container">
          <div className="top_s">
            <div className="row">
              <div className="col-sm-4 col-xs-4">
                <button type="button" className="quiz__back_btn" onClick={(e) => this.onClick(e)}>← <span>back</span></button>
              </div> 
              <div className="col-sm-4 col-xs-4" style={{textAlign:'center'}}>
                <span className="logo_top" href="#"><img className="av_lo" src="/logo.png" alt="" /></span>
              </div> 
              <div className="col-sm-4 col-xs-4" style={{textAlign: 'right'}}>
                <button type="button" className="close_btn" onClick={(e) => this.onExit(e)}>x</button>
              </div> 
            </div>
          </div>
        </div>

        <div className="header_progress">
            { spans }
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.form,
});

export default connect(mapStateToProps, {prevPage, clearData})(Header);
