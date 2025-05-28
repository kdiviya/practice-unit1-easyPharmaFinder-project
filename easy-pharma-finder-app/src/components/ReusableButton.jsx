import React from 'react';

const ReusableButton = ({children, type, id, name, onClick}) =>{
    return(
        <button type={type} id={id} name={name} onClick={onClick}>
            {children}
        </button>

    );
};

export default ReusableButton;