import React, {MouseEventHandler} from 'react';

interface ButtonProps {
    label: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({label, onClick}: ButtonProps) => {
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
            {label}
        </button>
    );
};


