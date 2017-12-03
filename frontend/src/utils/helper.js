import React from 'react'
import { ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap/lib'

export const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}