import React, {Component} from 'react';
import {Typography,Button} from '@material-ui/core';
import SigninForm from '../../components/SigninForm/SigninForm';
import './Signin.css';
class Signin extends Component {
    state = {
        userForm : {
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
                    required:true
                },
            valid:false,
            value:'',
            touched:false
        }
        },
        showPassword: false,
        errMessage:null,
    }
    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }
    signinSubmit = (event) => {
        event.preventDefault();
        const result = JSON.parse(localStorage.getItem('newUser'));
        if(this.state.userForm.email.value !== result[0].email && this.state.userForm.password.value !== result[0].password){
            this.setState({errMessage:'email or password is incorrect!'});
            localStorage.setItem('logged', false);
        }
        localStorage.setItem('logged', true);
        this.props.history.push('/dashboard');
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
    handleClickShowLPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
      };
    
      handleMouseDownLPassword = event => {
        event.preventDefault();
      };
      /*
      alertMessage = (well) =>{
        setTimeout(function() {
          }, 1000);
          
      }*/
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
            signin
            </Typography>
            <form noValidate onSubmit={this.signinSubmit} autoComplete="off">
            {userFormArray.map(userFormItem =>(
                    <SigninForm key={userFormItem.id}
                    elementType={userFormItem.userVal.elementType}
                    elementAttribute={userFormItem.userVal.elementAttribute}
                    value={userFormItem.userVal.value}
                    showPassword={this.state.showPassword}
                    inValid={!userFormItem.userVal.valid}
                    touched={userFormItem.userVal.touched}
                    validate={userFormItem.userVal.validation}
                    showPasswordClick={() => this.handleClickShowLPassword()}
                    onMouseDownPassword={(event) => this.handleMouseDownLPassword(event)}
                    changed={(evt) => this.inputChangedHandler(evt, userFormItem.id)}/>
                ))
            }
            <span>{this.state.errMessage}</span>
            <Button type="submit" variant="contained" size="large" color="primary">
          signin
        </Button>
            </form>
        </div>
    );
}
}

export default Signin;