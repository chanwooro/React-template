import React, {useState} from 'react';

function ButtonBlock({initState, buttonText, onClick, name}) {
    const [val, setState] = useState(initState || '');

    function buttonClicked(){
        setState('loading');
        onClick(val);
    }

    return (
        <div>
            <button name={name} onClick={buttonClicked}>{buttonText}</button>
        </div>
    )
}

export default ButtonBlock;