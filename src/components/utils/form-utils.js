import React from 'react'
import Checkbox from 'material-ui/Checkbox';
import { RadioGroup } from 'material-ui/Radio';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';

export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) =>
  <TextField
    label={label}
    error={ error !== undefined}
    helperText={error}
    {...input}
    {...custom}
  />

export const renderCheckbox = ({ input, label }) =>
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />

export const renderRadioGroup = ({ input, ...rest }) =>
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />

export const renderSelect = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) =>
  <Select
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />