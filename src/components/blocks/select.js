import React, { useState } from 'react';

function selectBlock({ initVal, onChange, name, options, placeholder}){
    const [val, setValue] = useState(initVal || '');
    
    const listOptions = options.map((item, key) => {
        return <option key={key} value={item.value}>{item.label}</option>
    })

    function changeValue(el){
        setValue(el.taget.value);
        onChange(el.target);
    }

    return (
        <div>
            <select name={name} onChange={changeValue} placeholder={placeholder} value={val}>
                
                { listOptions }
            </select>
        </div>

    )
}

export default selectBlock;