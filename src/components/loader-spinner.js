import React, {Component} from 'react';
import Loader from 'react-loader-spinner';

export default class MainLoader extends Component {
  state = { type: 'main' }
  render() {
    var relativeBlock = {};
    var divStyle = {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    if (this.props.type==='block'){
      relativeBlock = {
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '30px'
      }
      divStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      };
    }
    
    return(
      <div style={relativeBlock} className='loader'>
      <div style={divStyle}>
      <Loader type="Oval" color="#4183c4" height="50" width="50"/>   
      </div>
      </div>
      );
  }
}