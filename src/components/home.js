import React, { Component } from 'react';
import InputBlock from './blocks/input';

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: ''
    }
    // this.inputChange = this.inputChange.bind(this)
  }

  // Arrow function
  // Stage 2 feature
  // Arrow will always create a new function so do not spam with it
  inputChange = (val) => { 
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