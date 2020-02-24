import React, {Component} from 'react';
import {Typography, Button, FormControl, InputLabel, FilledInput, InputAdornment, IconButton} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';
import SignupForm from '../../components/SignupForm/SignupForm';
import './Signup.css';
class Signup extends Component {

    state = {
        userForm : {
            fullname: {
                elementType: 'input',
                elementAttribute: {
                    id: 'fullname',
                    type:'text',
                    label: 'fullname'
                },
                validation:{
                    required:true,
                    minLength:3
                },
                valid:false,
                value:'',
                touched:false
            },
        email: {
            elementType: 'input',
            elementAttribute: {
                    id: 'email',
                    type:'email',
                    label: 'email'
                },
            validation:{
                required:true
            },
            valid:false,
            value:'',
            touched:false
        },
        password: {
            elementType: 'password',
            elementAttribute: {
                    id: 'password',
                    type:'password'
                },
                validation:{
                    required:true,
                    minLength:3,
                    maxLength:8
                },
            valid:false,
            value:'',
            touched:false
        }
        },
        submitted: false,
        showPassword: false,
        showConfirmPassword:false
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        //if (rules.isEmail) {
            //const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            //isValid = pattern.test(value) && isValid
        //}

        return isValid;
    }

    signupSubmit = (event) => {
        event.preventDefault();
        
        this.setState({submitted:true});
        const data = {
               fullname:this.state.userForm.fullname.value,
               email:this.state.userForm.email.value,
               password:this.state.userForm.password.value
        };
        let arr =[];
        arr.push(data);
        let obj = JSON.stringify(arr);
        localStorage.setItem('newUser', obj);
        //const result = JSON.parse(localStorage.getItem('newUser'));
        this.props.history.push('/');
        //console.log(result);
    }

    inputChangedHandler = (evt, userSpecificItem) => {
        const newUserForm = {
            ...this.state.userForm
        }
        const newUserFormElement = {
            ...newUserForm[userSpecificItem]
        }
        newUserFormElement.value = evt.target.value;
        newUserFormElement.valid = this.checkValidity(newUserFormElement.value, newUserFormElement.validation);
        newUserFormElement.touched = true;
        newUserForm[userSpecificItem] = newUserFormElement;
        this.setState({userForm: newUserForm});
    }
    inputConfirmPassword = (evt) => {
        if(this.state.userForm.password.value !== evt.target.value){
            //alert('password and confirm password are not equal');
        }
        return null;
    }
    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
      };
    
      handleMouseDownPassword = event => {
        event.preventDefault();
      };
      handleClickShowConfirmPassword = () => {
        this.setState({showConfirmPassword: !this.state.showConfirmPassword });
      };
    
      handleMouseDownConfirmPassword = event => {
        event.preventDefault();
      };
render(){
    const style = {
        hd4:{
            textTransform: 'capitalize',
    fontWeight: 'bold',
    color:'#f1f1f1',
    textAlign: 'center',
    margin: '35px 0 30px'
        }
    }
    const userFormArray = [];
    for (const key in this.state.userForm) {
        userFormArray.push({
            id:key,
            userVal:this.state.userForm[key]
        });
    }
    return(
        <div className="signup">
            <Typography variant="h4" style={style.hd4}>
            signup
            </Typography>
            <form noValidate onSubmit={this.signupSubmit} autoComplete="off">
                {userFormArray.map(userFormItem =>(
                    <SignupForm key={userFormItem.id}
                    elementType={userFormItem.userVal.elementType}
                    elementAttribute={userFormItem.userVal.elementAttribute}
                    value={userFormItem.userVal.value}
                    showPassword={this.state.showPassword}
                    inValid={!userFormItem.userVal.valid}
                    touched={userFormItem.userVal.touched}
                    validate={userFormItem.userVal.validation}
                    showPasswordClick={() => this.handleClickShowPassword()}
                    onMouseDownPassword={(event) => this.handleMouseDownPassword(event)}
                    changed={(evt) => this.inputChangedHandler(evt, userFormItem.id)}/>
                ))
            }
                <FormControl variant="filled">
                <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
        <FilledInput
          type={this.state.showConfirmPassword ? 'text' : 'password'}
          onChange={(evt) => this.inputConfirmPassword(evt)} 
          id="confirm-password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => this.handleClickShowConfirmPassword()}
                onMouseDown={(event) => this.handleMouseDownConfirmPassword(event)}
                edge="end"
              >
                {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        </FormControl>
                <Button type="submit" variant="contained" size="large" color="primary">
          signup
        </Button>
                
            
            </form>
            
        </div>
    );
}
}

export default Signup;