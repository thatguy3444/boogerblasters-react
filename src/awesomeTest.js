import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAwesome } from './actions/testbutton';

class AwesomeTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const letterStyle = {
      width: 50,
      height: 50,
      margin: 10,
      backgroundColor: '#ffde00',
      color: '#333',
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: '32',
      textAlign: 'center',
    };

    return (
      <div className="Cart">
        <h2>Shopping Bag</h2>
        { this.props.isAwesomeBool ? <div>Woot</div> : <div>NOOO</div> }
        <div style={letterStyle} onClick={this.props.awesomeOn} />
        <div style={letterStyle} onClick={this.props.awesomeOff} />
      </div>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    isAwesomeBool: state.isAwesome,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    awesomeOn() {
      dispatch(setAwesome(1));
    },
    awesomeOff() {
      dispatch(setAwesome(0));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AwesomeTest);
