import React, { Component } from 'react';
import InputBlock from './blocks/input';
import SelectBlock from './blocks/select';
import ButtonBlock from './blocks/button';

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
  componentDidMount(){
    console.log(this.state.options);
  }

  buttonClick = (val) => {
    console.log("Button Click")
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <InputBlock onChange={this.inputChange} name="first_name" initVal="test" />
        <InputBlock onChange={this.inputChange} name="last_name" />
        <SelectBlock onChange={this.inputChange} options={this.state.options} name="select" initVal="a" placeholder="Select option"/>
        <ButtonBlock name="button" buttonText="Test Button" onClick={this.buttonClick} initState="idle" />
      </div>
    )
  }
}

export default Home