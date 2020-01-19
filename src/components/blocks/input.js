import React, { useState } from 'react';


// Functional component is plain javascript function so cannot use setState()
// Means functional components are used for components that do not require states.
// Functional component = No own states.
function InputBlock({initVal, onChange, name}){
    // first arg is always variable and second one is always setter method
    const [val, setInputVal] = useState(initVal || '');

    function inputChange(event){
        // this.setState({ value: event.target.value })
        // this.props.onChange(event.target.value)
        setInputVal(event.target.value);
        onChange(event.target);
    }


    return (
    <div>
        <input type="text" value={val} onChange={inputChange} name={name} />
    </div>
    )

}

export default InputBlock