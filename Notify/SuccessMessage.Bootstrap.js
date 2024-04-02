import React from 'react';
import Alert from 'react-bootstrap/Alert';

const SuccessMessage = ({variant = "" , message }) => {
  return (
    <Alert variant={variant} style={{ fontSize: 20 }}>
		<strong>{message}</strong>
    </Alert>
  );
};

export default SuccessMessage;