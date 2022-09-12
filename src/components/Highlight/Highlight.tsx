import React from 'react';

interface HighlightProps {
    label: string
    color: string
}

export const Highlight = ({label, color}: HighlightProps) => {
    return (
        <div>
            <div style={{backgroundColor: color, padding: "20px", display: "inline-block", margin: "20px"}}>
                {label}
            </div>
        </div>
    );
};


