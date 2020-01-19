import React, { Component } from 'react';
import InputBlock from './blocks/input';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: ''
    }
    this.inputChange = this.inputChange.bind(this)
  }

  inputChange(val){
    
    this.setState({[val.name]: val.value})
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <InputBlock onChange={this.inputChange} name="first_name" />
        <InputBlock onChange={this.inputChange} name="last_name" />
      </div>
    )
  }
}

export default Home