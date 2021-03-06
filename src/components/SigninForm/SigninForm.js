import React, {Fragment} from 'react';
import {TextField, InputLabel, FilledInput, InputAdornment, IconButton, FormControl,FormHelperText} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import './SigninForm.css';

const SigninForm  = (props) => {
    const inputClasses = [];
    let message = null;
    if (props.inValid && props.touched) {
        inputClasses.push('invalid');
    }
    let inputField = null;
    switch (props.elementType) {
        case ('input'):
        inputField = <TextField 
        //error
        value={props.value}
        InputProps={{
            className: inputClasses.join(' ')?message =`${props.elementAttribute.id} is required please!`:null,
          }}
        {...props.elementAttribute} 
        onChange = {props.changed}
        helperText={message}
        variant="filled"
        required="true"
        />;
        break;
        case ('password'):
            inputField = (
                <Fragment>
                    <FormControl variant="filled" required="true">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <FilledInput
            //error
              id={props.elementAttribute.id}
              type={props.showPassword ? 'text' : props.elementAttribute.type}
              value={props.value}
              onChange={props.changed}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={props.showPasswordClick}
                    onMouseDown={props.onMouseDownPassword}
                    edge="end"
                  >
                    {props.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            </FormControl>
                </Fragment>
            
            );
            break;
        default:
            inputField = null ? 
            inputField = <TextField 
        variant="filled" 
        value={props.value}
        onChange = {props.changed}
        {...props.elementAttribute} />
        : null;
    }
    return(
    <Fragment>
{inputField}
    </Fragment>
    );
    }

export default SigninForm;