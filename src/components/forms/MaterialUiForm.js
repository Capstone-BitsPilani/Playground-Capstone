import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Rating from '@material-ui/lab/Rating';

import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import asyncValidate from './asyncValidate';
import validate from './validate';
import { Button } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText'

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }
const renderTextField = (
{ input, label, meta: { touched, error,invalid }, ...custom },
) => (
<TextField helperText={touched && error}     error={touched && invalid}
 {...input} {...custom} />
);

const renderRating=({input,...rest})=>(
    <Rating  {...input} {...rest}  />


);
const renderCheckbox = ({ input, ...rest }) => (
    <FormControlLabel
    {...input} {...rest} value={input.value} onChange={(event, value)=> input.onChange(value)}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
<RadioGroup {...input} {...rest} onChange={(event, value)=> input.onChange(value)}
  />
  );

  const renderSelectField = (
  {   input,name,
    label,variant,
    meta: { touched, error },
    children,
    ...custom },
  ) => (
    <FormControl variant={variant} error={touched && error}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: {name},
        id: {name}
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}

  </FormControl>
    
    );

    const MaterialUiForm = props => {
    const { handleSubmit,  reset} = props;
    const onSubmit=(formValues)=>{
        console.log(formValues);
    }
    return (
    <form onSubmit={props.handleSubmit(onSubmit)}>
        <div>
            <Field name="rating" component={renderRating} />
        </div>
       
        <div>
        <Field id="firstName" name="firstName" value="enter fname" component={renderTextField} label="First Name" variant="outlined" />
        </div>
        <div>
        <Field id="lastName" name="lastName" value="enter lname" component={renderTextField} label="Last Name" variant="outlined" />
        </div>
        <div>
        <Field id="email" name="email" value="enter email" component={renderTextField} label="Email" variant="outlined" />
        </div>
        <div>
      
        <Field name="sex" component={renderRadioGroup}>
          <FormControlLabel value="male" control={<Radio color="primary" />} label="male" />
          <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />

        </Field>
        </div>
        <div>
      
        <Field
        
          name="favoriteColor"
          component={renderSelectField}
          label="Color" variant="outlined" 
        >
          <option value="" />
          <option value={'ff0000'}>Red</option>
          <option value={'00ff00'}>Green</option>
          <option value={'0000ff'}>Blue</option>
        </Field>
        </div>
        <div>
        <Field
          
          name="employed"   control={<Checkbox color="primary" />} 
          labelPlacement="end" component={renderCheckbox} label="Employed" />
      </div>
        <div>
        <Field id="notes" name="notes" value="enter notes" multiline rows={10} component={renderTextField} label="Notes" variant="outlined" />

        </div>
        <div>
        <Button type="submit">Submit</Button>
        <Button onClick={reset}>
          Clear Values
        </Button>
        </div>
     
    </form>
    );
    };

    export default reduxForm({
    form: 'MaterialUiForm', // a unique identifier for this form
    validate,
    asyncValidate,
    })(MaterialUiForm);