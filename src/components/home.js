import React, { Component } from 'react';
import InputBlock from './blocks/input';
import SelectBlock from './blocks/select';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      options: [
        {
          label: 'AA',
          value: 'a'
        },
        {
          label: 'BB',
          value: 'b'
        }
      ]
    }
    // this.inputChange = this.inputChange.bind(this)
  }

  // Arrow function
  // Stage 2 feature
  // Arrow will always create a new function so do not spam with it
  // This will also binds function just like doing in constructor
  inputChange = (val) => { 
    this.setState({[val.name]: val.value})
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <InputBlock onChange={this.inputChange} name="first_name" initVal="test" />
        <InputBlock onChange={this.inputChange} name="last_name" />
        <SelectBlock onChange={this.inputChange} options={this.state.options} name="select" initVal="a" placeholder="Select option"/>
      </div>
    )
  }
}

export default Home