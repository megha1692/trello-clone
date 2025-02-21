// src/components/CustomButton.js
import React from 'react';

const CustomButton = ({
  borderRadius = '8px',
  fontSize = '16px',
  width = '150px',
  height = '50px',
  text = 'Click Me',
  icon = null,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius,
        fontSize,
        width,
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default CustomButton;