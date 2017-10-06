import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Snackbar as SB } from 'material-ui'
import Slide from 'material-ui/transitions/Slide';

class Snackbar extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.snackbar.open){
      setTimeout(() => this.props.dismissSnackbar(), 5000)
    }
  }
  
  render() {
    return (
      <SB
        open={this.props.snackbar.open}
        transition={<Slide direction={this.props.snackbar.direction} />}
        message={<span>{this.props.snackbar.message}</span>}
      />
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators(
    {
      
    },
    dispatch
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    snackbar: state.snackbar
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar);
