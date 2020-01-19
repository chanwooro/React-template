import React, { Component } from 'react';

function InputBlock({initVal, onChange, name}){
    // constructor() {
    //     super();
    //     this.state = {
    //         value: ''
    //     }

    //     this.inputChange = this.inputChange.bind(this);
    // }

    function inputChange(event){
        // this.setState({ value: event.target.value })
        // this.props.onChange(event.target.value)
        onChange(event.target)
    }


    return (
    <div>
        <input type="text" value={initVal} onChange={inputChange} name={name} />
    </div>
    )

}

export default InputBlock