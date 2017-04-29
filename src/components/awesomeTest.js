import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setButtonState, toggleButtonState } from '../actions/testbutton';
import style from './awesomeTest.css';

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

    const letterStyle2 = {
      width: 50,
      height: 50,
      margin: 10,
      backgroundColor: '#00FF00',
      color: '#333',
      display: 'inline-block',
      fontFamily: 'monospace',
      fontSize: '32',
      textAlign: 'center',
    };

    return (
      <div className="Cart">
        <h2>Shopping Bag</h2>
        {
          (() => {
            console.log(this.props);
            return this.props.isAwesomeBool ? (<div>Woot</div>) : (<div>NOOO</div>);
          })()
        }
        <div className={style.awesomeStyle} onClick={this.props.awesomeOn} />
        <div style={letterStyle} onClick={this.props.awesomeOff} />
        <div style={letterStyle2} onClick={this.props.awesomeToggle} />
      </div>
    );
  }
}

// This is totally optional, but forces react to check the prop types
// when running in debug
AwesomeTest.propTypes = {
  isAwesomeBool: PropTypes.bool.isRequired,
  awesomeOn: PropTypes.func.isRequired,
  awesomeOff: PropTypes.func.isRequired,
  awesomeToggle: PropTypes.func.isRequired,
};


function mapStateToProps(state, props) {
  return {
    isAwesomeBool: state.testbutton.isOn,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    awesomeOn() {
      dispatch(setButtonState(true));
    },
    awesomeOff() {
      dispatch(setButtonState(false));
    },
    awesomeToggle() {
      dispatch(toggleButtonState());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AwesomeTest);
