import React, {MouseEventHandler} from 'react';

interface ButtonProps {
    label: string,
    onClick: MouseEventHandler<HTMLButtonElement>
    prefix: string
}

export const Button = ({label, onClick, prefix}: ButtonProps) => {
    return (
        <button onClick={onClick}
                style={{
                    padding: '10px 25px',
                    backgroundColor: "#465e98",
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    marginTop: '20px'
                }}>
            {prefix}
            {label}
        </button>
    );
};


