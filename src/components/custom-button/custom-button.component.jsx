import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, isInverted, ...props }) => (
  <button
    className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} ${
      isInverted ? 'inverted' : ''
    } `}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
