import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorMessage = ({variant = "", message }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
		<strong>{message}</strong>
    </Alert>
  ); 
}

export default ErrorMessage;