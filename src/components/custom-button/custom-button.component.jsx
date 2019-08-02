import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...props }) => (
  <button
    className={`custom-button ${props.isGoogleSignIn ? 'google-sign-in' : ''} `}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
